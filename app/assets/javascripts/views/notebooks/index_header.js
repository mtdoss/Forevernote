Evernote.Views.NotebookIndexHeader = Backbone.View.extend({
  template: JST["notebooks/index_header"],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});