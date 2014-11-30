Evernote.Views.NotesIndexItem = Backbone.CompositeView.extend({
  template: JST["notes/index_item"],
  className: 'note-index-item',

  initialize: function(options) {
    this.parent = options.parent;
  },

  events: {
    "click": function(event) {
      this.addShow(event);
      this.classChange(event);
    }
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
  },

  //TODO: this is bad!
  classChange: function(event) {
    if (this.parent._clickedOn) {
      this.parent._clickedOn.css({background: 'white' });
    }

    this.parent._clickedOn = $(event.currentTarget);
    this.parent._clickedOn.css({background: '#ecf0f3'});
  }
});