Evernote.Views.NotebooksShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  render: function() {
    var content = this.template({
      notebook: this.model
    });
    this.$el.html(content);
    return this;
  },

  addNoteIndexItem: function(indexItem) {
    var noteIndexItem = new Evernote.Views.NotesIndexItem({
      model: indexItem
    });

    this.addSubview('note-index-item', noteIndexItem);
  },

})