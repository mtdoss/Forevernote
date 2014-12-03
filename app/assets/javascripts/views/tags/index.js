Evernote.Views.TagsIndex = Backbone.CompositeView.extend({
  template: JST["tags/index"],

  initialize: function(options){
    this.tags = options.tags;
    debugger;
    // this.listenTo(this.tags, )
    this.tags.each(this.addIndexItem.bind(this));
  },

  addIndexItem: function(indexItem){
    var indexItemView = new Evernote.Views.TagIndexItem({
      model: indexItem
    });

    this.addSubview('tags-index', indexItemView);
  },

  render: function() {
    var content = this.template({
      tags: this.tags
    });
    this.$el.html(content);
    return this;
  }
});