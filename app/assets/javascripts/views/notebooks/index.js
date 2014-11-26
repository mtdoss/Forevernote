Evernote.Views.NotebooksIndex = Backbone.CompositeView.extend({
  template: JST["notebooks/index"],

  events: {
    // "click .notebook-index-item": "showNotebook"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
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

  // addAllIndexItems: function() {
//     this.collection.each(function (notebook) {
//       this.addIndexItem(notebook);
//     }.bind(this));
//}

  // addNoteIndexItem: function(indexItem) {
  //   var noteIndexItem = new Evernote.Views.NotesIndexItem({
  //     model: indexItem
  //   });
  //
  //   this.addSubview('note-index-item', noteIndexItem);
  // },
})