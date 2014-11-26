Evernote.Views.NotesIndexItem = Backbone.CompositeView.extend({
  template: JST["notes/index_item"],

  initialize: function(options) {
    this.parent = options.parent;
  },

  events: {
    "click": "addShow"
  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);
    return this;
  },

  addShow: function() {
    console.log("doing stuff to a note");
    var noteShow = new Evernote.Views.NotesShow({
      model: this.model,
      parent: this
    });
    this.parent.parent.parent.addSubviewReplacement('.note-show', noteShow);
  }
});