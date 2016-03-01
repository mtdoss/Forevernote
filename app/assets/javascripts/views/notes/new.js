Evernote.Views.NotesNew = Backbone.CompositeView.extend({
  template: JST["notes/new"],

  initialize: function() {
    this.attachHeader();
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

  throttledSubmit: function() {
    var timer  = null;
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout( function() {
      timer = null;
      $("#commit-edit").click();
    }, 500);
  },

  submit: function(event) {
    event.preventDefault();
    var view = this;
    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params);
    debugger

    if (this.model.isNew()) {
      this.model.collection.create(this.model, {});
    } else {
      this.model.save({}, {});
    }
  }
});
