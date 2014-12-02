Evernote.Views.NotebooksIndex = Backbone.CompositeView.extend({
  template: JST["notebooks/index"],

  initialize: function() {
    //first listenTo causes weird behavior where fetching in console causes
    //multiple show pages to appear - does that imply something's wrong? probably
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, "add", this.selectFirst);
    this.addIndexHeader();
    this._first = false;
    // is filled yet?
    // this.addAllIndexItems();
    // this.listenTo(this.model.notes(), "add", this.addNoteIndexItem);
    // this.model.notes().each(this.addNoteIndexItem.bind(this));
  },

  render: function(){
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addIndexItem: function(indexItem) {
    var indexItem = new Evernote.Views.NotebooksIndexItem({
      model: indexItem,
      parent: this
    });

    this.addSubview('.notebook-list', indexItem);
  },

  addIndexHeader: function() {
    var indexHeader = new Evernote.Views.NotebookIndexHeader();

    this.addSubview('.notebook-list', indexHeader);
  },

  selectFirst: function() {
    if (this._first) {
      $('.notebook-index-item').click();
    }
    this._first = true;
  }

  // addAllIndexItems: function() {
//     this.collection.each(function (notebook) {
//       this.addIndexItem(notebook);
//     }.bind(this));
//}
});