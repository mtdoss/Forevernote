Evernote.Views.NotebooksShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.notes(), "add", this.addNoteIndexItem);
    this.model.notes().each(this.addNoteIndexItem.bind(this));
    // this.model.collection.getOrFetch(this.model.id)
    // this.model.fetch();
    this.parent = options.parent;
  },

  events: {
    "click .new-note": "addNew" //this won't work: no new-note here
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
      model: indexItem,
      parent: this
    });

    this.addSubview('.note-index-items', noteIndexItem);
  },

  addNew: function(event) {
    console.log("doing stuff to a note");
    event.preventDefault();
    var newNote = new Evernote.Models.Note({ title: "untitled" });
    // var newIndexItem = new Evernote.Views.NotebooksIndexItem({
    //   model: blankIndexItem,
    //   parent: this
    // });
    this.addNoteIndexItem(newNote);
    this.render();
    debugger;
  }


});