Evernote.Views.NotebooksNew = Backbone.View.extend({
  template: JST["notebooks/new"],

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});