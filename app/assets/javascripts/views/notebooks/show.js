Evernote.Views.NotebooksShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function(options) {
    debugger;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.notes(), "add", this.addNoteIndexItem);
    this.model.notes().each(this.addNoteIndexItem.bind(this));
    // this.model.collection.getOrFetch(this.model.id)
    // this.model.fetch();
    this.parent = options.parent;
  },

  // events: {
  //   "click .new-note": "addNew" //this won't work: no new-note here
  // },

  onRender: function(){
    //TODO: we ALSO NEED TO overwrite 'remove' and explicitly
    //unsubscribe from this event otherwise we will have extra events firing
    //which is bad and not subtle and ZOMBIE VIEWS!
    $('.new-note').click(this.addNew.bind(this));
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
    event.preventDefault();
    var view = this;
    var newNote = new Evernote.Models.Note({
      title: "untitled",
      notebook_id: this.model.id
    });
    var notebook = Evernote.Collections.notebooks.get(this.model.id);
    // var newIndexItem = new Evernote.Views.NotebooksIndexItem({
    //   model: blankIndexItem,
    //   parent: this
    // });
    // debugger;
    this.addNoteIndexItem(newNote);
    // notebook.create(newNote, {});
    newNote.save({}, {
      success: function() {
        console.log("saving");
        // notebook.add(newNote);
        // view.render();
      }
    });
  }


});