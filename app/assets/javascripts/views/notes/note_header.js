Evernote.Views.NoteHeader = Backbone.View.extend({
  template: JST["notes/note_header"],
  
  events: {
    "click .delete": "removeNote",
    "click .submit": "submit"
  },

  render: function() {
    var offset = new Date().getTimezoneOffset() / 60;
    var createdTime = moment(this.model.attributes.created_at, "YYYY MM DD HH:mm:ss").subtract(offset, "hours");
    var updatedTime = moment(this.model.attributes.updated_at, "YYYY MM DD HH:mm:ss").subtract(offset, "hours");
    var friendlyCreatedAt = createdTime.fromNow();
    var friendlyUpdatedAt = updatedTime.fromNow();
    var content = this.template({
      note: this.model,
      createdAt: friendlyCreatedAt,
      updatedAt: friendlyUpdatedAt
    });
    this.$el.html(content);
    
    return this;
  },

  removeNote: function() {
    this.model.destroy();
  },
  
  //submitting new tag
  submit: function(event){
    event.preventDefault();
    var tag = new Evernote.Models.Tag();
    tag.set("title", $(".new-tag").val());

  }
});

