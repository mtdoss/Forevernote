Evernote.Views.NoteHeader = Backbone.View.extend({
  template: JST["notes/note_header"],
  
  // createdAt: function() {

  // }

  render: function() {
    var friendlyCreatedAt = moment(this.model.attributes.created_at, "YYYY MM DD HH:mm:ss").fromNow();
    var friendlyUpdatedAt = moment(this.model.attributes.updated_at, "YYYY MM DD HH:mm:ss").fromNow();
    var content = this.template({
      note: this.model,
      createdAt: friendlyCreatedAt,
      updatedAt: friendlyUpdatedAt
    });
    this.$el.html(content);
    
    return this;
  }
});