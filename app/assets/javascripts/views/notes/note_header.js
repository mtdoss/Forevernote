Evernote.Views.NoteHeader = Backbone.View.extend({
  template: JST["notes/note_header"],

  render: function() {
    var content = this.template();

    this.$el.html(content);
    return this;
  }
});