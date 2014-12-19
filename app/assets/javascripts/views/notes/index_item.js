Evernote.Views.NotesIndexItem = Backbone.CompositeView.extend({
  template: JST["notes/index_item"],
  className: 'note-index-item',

  initialize: function(options) {
    this.parent = options.parent;
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    "click": function(event) {
      this.addShow(event);
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
    var noteNew = new Evernote.Views.NotesNew({
      model: this.model,
      parent: this
    });
    this.parent.parent.parent.addSubviewReplacement('.note-show', noteNew); //lol
  }
});