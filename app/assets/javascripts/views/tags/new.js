Evernote.Views.NewTag = Backbone.View.extend({
  template: JST["tags/new"],

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;

  }
});