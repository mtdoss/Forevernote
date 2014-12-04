Evernote.Views.TagIndexItem = Backbone.View.extend({
  template: JST["tags/index_item"],
  className: 'tag-index-item',
  
  events: {
    "click": "doStuff"
  },

  render: function(){
    var content = this.template({
      tag: this.model
    });

    this.$el.html(content);
    return this;
  },

  doStuff: function() {
    alert("doing stuff");
  }
});