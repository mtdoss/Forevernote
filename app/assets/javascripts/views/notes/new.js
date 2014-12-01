Evernote.Views.NotesNew = Backbone.View.extend({
  template: JST["notes/new"],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var view = this;
    var params = $(event.currentTarget).serializeJSON();
    // var newNote = new Evernote.Models.Note(params["note"]);
    this.model.set(params);

    if (this.model.isNew()) {
      this.model.collection.create(this.model, {});
    } else {
      this.model.save({}, {});
    }
    // newNote.update({}, {
    //   success: function() {
    //     console.log("success");
    //     view.model.collection.add(newNote);
    //     view.render();
    //     debugger;
    //   },
    // });
  }
});



    // if (this.model.isNew()) {
    //   // this.collection.add(this.model);
    //   this.collection.create(this.model, { success: success });
    //   // this.collection.save({}, { success: success })
    // } else {
    //   this.model.save({}, { success: success })
    // }
