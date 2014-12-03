Evernote.Views.NotebooksIndex = Backbone.CompositeView.extend({
  template: JST["notebooks/index"],

  initialize: function(options) {
    //first listenTo causes weird behavior where fetching in console causes
    //multiple show pages to appear - does that imply something's wrong? probably
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
    this.addTagsIndex();
  },

  render: function(){
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addTagsIndex: function(){
    var tagsIndex = new Evernote.Views.TagsIndex({
      tags: this.tagsCollection
    });
    this.addSubview('.tags-index', tagsIndex);
  },

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

    this.addSubview('.notebook-list', indexItem);
  },

 addNewNotebook: function() {
    var newNotebook = new Evernote.Views.NotebooksNew();

    this.addSubview('.notebook-list', newNotebook);
  },

  addIndexHeader: function() {
    var indexHeader = new Evernote.Views.NotebookIndexHeader({
      collection: this.collection
    });

    this.addSubview('.notebook-list', indexHeader);
  },

  selectFirst: function() {
    if (this._first) {
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