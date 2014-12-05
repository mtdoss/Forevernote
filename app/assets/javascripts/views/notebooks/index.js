Evernote.Views.NotebooksIndex = Backbone.CompositeView.extend({
  template: JST["notebooks/index"],

  initialize: function(options) {
    this.tagsCollection = options.tagsCollection;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, "add", this.selectFirst);
    this.addNewNotebook();
    this.addIndexHeader();
    // this.listenTo(this.tagsCollection, "sync", this.addTagsIndex);
    this.listenTo(this.tagsCollection, "sync", this.render);
    this.listenTo(this.tagsCollection, "add", this.addTagsIndexItem);
    this._first = false;
    // this.listenTo(this.collection.models, "sync", this.render);
    // this.addTagsIndex();
  },

  events: {
    "click .notebook-index-item": "doStuff",
    "click .notebook-tag-index-item": "pickItem"
  },

  doStuff: function(){
    // debugger;
  },

  pickItem: function(event) {
    var item = $(event.currentTarget);
    this.$('.notebook-tag-index-item').removeClass('notebook-tag-index-selected-item');
    item.addClass('notebook-tag-index-selected-item');
  },

  render: function(){
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  // addTagsIndex: function(){
  //   var tagsIndex = new Evernote.Views.TagsIndex({
  //     tags: this.tagsCollection
  //   });
  //   this.addSubview('.tags-index', tagsIndex);
  // },

  addTagsIndexItem: function(indexItem) {
    var tagIndexItem = new Evernote.Views.TagIndexItem({
      model: indexItem
    });

    this.addSubview('.tags-index', tagIndexItem);
  },

  addIndexItem: function(indexItem) {
    var indexItem = new Evernote.Views.NotebooksIndexItem({
      model: indexItem,
      parent: this
    });
    window.wtf = indexItem;
    this.addSubview('.notebook-list', indexItem);
  },

 addNewNotebook: function() {
    // debugger;
    //TODO: CURRENT USER?
    var newNote = new Evernote.Models.Notebook({
      title: "untitled",
      user_id: 1
    });
    var newNotebook = new Evernote.Views.NotebooksNew({
      model: newNote
    });

    this.addSubview('.notebook-list', newNotebook);
  },

  addIndexHeader: function() {
    var indexHeader = new Evernote.Views.NotebookIndexHeader({
      collection: this.collection
    });

    this.addSubview('.notebook-list', indexHeader);
  },

  selectFirst: function() {
    if (!this._first) {
      $('.notebook-index-item').click();
    }
    this._first = true;
  },


  // addAllIndexItems: function() {
//     this.collection.each(function (notebook) {
//       this.addIndexItem(notebook);
//     }.bind(this));
//}
});