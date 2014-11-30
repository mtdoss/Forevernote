Evernote.Views.NotesIndexItem = Backbone.CompositeView.extend({
  template: JST["notes/index_item"],

  initialize: function(options) {
    this.parent = options.parent;
  },

  events: {
    "click": "addShow",
    "click": "classChange"
  },

  render: function() {
    var content = this.template({
      note: this.model,
      slicedText: this.model.teaserText()
    });
    this.$el.html(content);
    return this;
  },

  addShow: function(event) {
    console.log("doing stuff to a note");
    var noteShow = new Evernote.Views.NotesShow({
      model: this.model,
      parent: this
    });
    this.parent.parent.parent.addSubviewReplacement('.note-show', noteShow);
    this.parent._clickedOn = $(event.currentTarget);
  },

  //TODO: this is bad!
  classChange: function(event) {
    debugger;
    if (this.parent._clickedOn) {
      this.parent._clickedOn.css({background: 'white' });
    }

    this.parent._clickedOn = $(event.currentTarget);
    this.parent._clickedOn.css({background: 'orange'});
  }
});