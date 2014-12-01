Evernote.Views.NotesShow = Backbone.View.extend({
  template: JST["notes/show"],

  events: {
    "click .new-note": "doStuff"
  },

  render: function(){
    var content = this.template({
      note: this.model
    });

    this.$el.html(content);
    return this;
  },

  doStuff: function() {
    console.log("doing stuff");
  }
});