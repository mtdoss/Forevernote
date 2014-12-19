Evernote.Views.TagsIndex = Backbone.CompositeView.extend({
  template: JST["tags/index"],
  className: 'notebook-tag-index-item',

  initialize: function(options){
    this.tags = options.tags;
    this.listenTo(this.tags, "add", this.addIndexItem);
  },

  addIndexItem: function(indexItem){
    var indexItemView = new Evernote.Views.TagIndexItem({
      model: indexItem
    });
    
  },

  render: function() {
    var content = this.template({
      tags: this.tags
    });
    this.$el.html(content);
    return this;
  }
});