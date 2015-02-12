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
    this.selectFirst();
    this.onRender();
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
    $('.new-note').off();
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
  },

  addNoteIndexItem: function(indexItem) {
    this.selectFirst();
    var noteIndexItem = new Evernote.Views.NotesIndexItem({
      model: indexItem,
      parent: this
    });
    this.addSubviewPrepend('.note-index-items', noteIndexItem);
    $('.note-index-item').first().click();
  },

  addNoteIndexItemPrepend: function(indexItem) {
    this.selectFirst();
    var noteIndexItem = new Evernote.Views.NotesIndexItem({
      model: indexItem,
      parent: this
    });
    this.addSubviewPrepend('.note-index-items', noteIndexItem);
    $('.note-index-item').first().click();
  },

  addNew: function(event) {
    event.preventDefault();
    var view = this;
    var newNote = new Evernote.Models.Note({
      title: "untitled",
      notebook_id: this.model.id
    });
    var notebook = Evernote.Collections.notebooks.get(this.model.id);
    newNote.save({}, {
      success: function() {
        notebook.notes().add(newNote);
      }
    });
  },

  selectFirst: function() {
    var that = this;
    if (this.model.notes().length > 0) {
      var newest = this.model.notes().first().get('created_at');
      this.model.notes().each(function(note) {
        if (note.get('created_at') >= newest) {
          newest = note.get('created_at');
          $('.note-index-item').first().click();
        }
      });
    }
  }
});
