Evernote.Views.NotesNew = Backbone.CompositeView.extend({
  template: JST["notes/new"],

  initialize: function() {
    this.attachHeader();
    // this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "submit form": "submit",
    "keyup #note-body": "throttledSubmit"
  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);

    return this;
  },

  attachHeader: function() {
    var headerItem = new Evernote.Views.NoteHeader({
      model: this.model
    });
    this.addSubview('.note-header', headerItem);
  },

  //this is undoubtedly a bad way to do it
  throttledSubmit: function(event) {
    var timer  = null;
    document.getElementById("note-body").onkeyup = function() {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout( function() {
        timer = null;
        $("#commit-edit").click()
      }, 500);
    };
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

// function addTextAreaCallback(textArea, callback, delay) {
//     var timer = null;
//     textArea.onkeypress = function() {
//         if (timer) {
//             window.clearTimeout(timer);
//         }
//         timer = window.setTimeout( function() {
//             timer = null;
//             callback();
//         }, delay );
//     };
//     textArea = null;
// }

// addTextAreaCallback( document.getElementById("#note-body"), $("#commit-edit").click(), 1000 );
// // addTextAreaCallback( document.getElementById("#note-title"), $("#commit-edit").click(), 1000 );