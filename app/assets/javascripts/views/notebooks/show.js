Evernote.Views.NotebooksShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.notes(), "add", this.addNoteIndexItem);
    this.model.notes().each(this.addNoteIndexItem.bind(this));
    this.listenTo(this.model.notes(), "remove", this.removeNote);
    this.listenTo(this.model.notes(), "add remove", this.selectFirst);

    this.parent = options.parent;
    this._first = false;
  },

  events: {
    "click .note-index-item": "pickItem"
  },

  pickItem: function(event){
    var item = $(event.currentTarget);
    this.$('.note-index-item').removeClass('selected-item');
    item.addClass('selected-item');
  },

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
    this.attachSubviews();

    return this;
  },

  removeNote: function(removedNote) {
    var noteSubviews = this.subviews('.note-index-items');
    var subToRemove = _.find(noteSubviews, function(subview){
      return removedNote.id === subview.model.id;
    });
    this.removeSubview('note-index-item', subToRemove);
    // $('note-index-item').click();
  },

  addNoteIndexItem: function(indexItem) {
    var noteIndexItem = new Evernote.Views.NotesIndexItem({
      model: indexItem,
      parent: this
    });
    this.addSubview('.note-index-items', noteIndexItem);
    $('.note-index-item').click();
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
    this.addNoteIndexItem(newNote);
    // notebook.create(newNote, {});
    newNote.save({}, {
      success: function() {
        // console.log("saving");
        // notebook.add(newNote);
        // view.render();
      }
    });
  },

  selectFirst: function() {
    if (this._first) {
      $('.note-index-item').click();
    }
    this._first = true;
  }
});