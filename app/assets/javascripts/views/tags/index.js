Evernote.Views.TagsIndex = Backbone.View.extend({
  template: JST["tags/index"],

  render: function() {
    var content = this.template({
      tags: this.collection
    });

    this.$el.html(content);
    return this;
  }
});