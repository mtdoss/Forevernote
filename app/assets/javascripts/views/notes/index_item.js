Evernote.Views.NotesIndexItem = Backbone.View.extend({
  template: JST["notes/index_item"],

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
    console.log("Doing stuff to a note index item!");
  }
});