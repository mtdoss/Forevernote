Evernote.Views.TagIndexItem = Backbone.View.extend({
  template: JST["tags/index_item"],
  className: 'tag-index-item notebook-tag-index-item',
  
  events: {
    "click": "listItems"
  },

  render: function(){
    var content = this.template({
      tag: this.model
    });

    this.$el.html(content);
    return this;
  },

  listItems: function(event) {
    this.model.fetch();
    console.log(this.model.notes().length);
  }
});