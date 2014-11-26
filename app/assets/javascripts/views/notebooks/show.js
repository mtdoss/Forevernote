Evernote.Views.NotebooksShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.notes(), "add", this.addNoteIndexItem)
    this.model.notes().each(this.addNoteIndexItem.bind(this));
    // this.model.collection.getOrFetch(this.model.id)
    // this.model.fetch();
  },

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

    this.addSubview('.note-index-item', noteIndexItem);
  },

})