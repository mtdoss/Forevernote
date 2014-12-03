Evernote.Views.TagIndexItem = Backbone.View.extend({
  template: JST["tags/index_item"],
  className: 'tag-index-item',

  render: function(){
    debugger;
    var content = this.template({
      tag: this.model
    });

    this.$el.html(content);
    return this;
  }
});