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

  addShow: function() {
    console.log("doing stuff to a note");
    var noteShow = new Evernote.Views.NotesShow({
      model: this.model,
      parent: this
    });
    this.parent.parent.parent.addSubviewReplacement('.note-show', noteShow);
  },

  //TODO: this is bad!
  classChange: function(event) {
    if (this._indexItem) {
      this._indexItem.css({background: 'white' });
    }

    this._indexItem = $(event.currentTarget);
    this._indexItem.css({background: 'orange'});
  }
});