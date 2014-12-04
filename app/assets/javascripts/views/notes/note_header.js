Evernote.Views.NoteHeader = Backbone.View.extend({
  template: JST["notes/note_header"],
  
  events: {
    "click .delete": "removeNote",
    "click .submit": "submit"
  },

  render: function() {
    var offset = new Date().getTimezoneOffset() / 60;
    var friendlyCreatedAt = moment(this.model.attributes.created_at, "YYYY MM DD HH:mm:ss").fromNow();
    var friendlyUpdatedAt = moment(this.model.attributes.updated_at, "YYYY MM DD HH:mm:ss").fromNow();
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


// submit: function(event) {
//     event.preventDefault();
//     var view = this;
//     var params = $(event.currentTarget).serializeJSON();
//     // var newNote = new Evernote.Models.Note(params["note"]);
//     this.model.set(params);

//     if (this.model.isNew()) {
//       this.model.collection.create(this.model, {});
//     } else {
//       this.model.save({}, {});
//     }
//     // newNote.update({}, {
//     //   success: function() {
//     //     console.log("success");
//     //     view.model.collection.add(newNote);
//     //     view.render();
//     //     debugger;
//     //   },
//     // });
//   }