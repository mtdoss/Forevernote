Evernote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST["notebooks/index"],

  render: function(){
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);

    return this;
  }
})