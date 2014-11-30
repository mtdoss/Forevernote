Evernote.Views.NotesNew = Backbone.View.extend({
  template: JST["notes/new"],

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    
  }
});