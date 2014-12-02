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
      // this.classChange(event);
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
  },

  //TODO: this is bad!
  // classChange: function(event) {
  //   if (this.parent._clickedOn) {
  //     this.parent._clickedOn.css({background: 'white' });
  //   }

  //   this.parent._clickedOn = $(event.currentTarget);
  //   this.parent._clickedOn.css({background: '#ecf0f3'});
  // }
});