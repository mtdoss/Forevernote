Evernote.Views.TagsIndex = Backbone.View.extend({
  template: JST["tags/index"],

  initialize: function(options){
    this.tags = options.tags
  },

  render: function() {
    var content = this.template({
      tags: this.tags
    });
    this.$el.html(content);
    return this;
  }
});