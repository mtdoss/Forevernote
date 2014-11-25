Evernote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST["notebooks/index"],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);


  },

  render: function(){
    var content = this.template({ notebooks: this.collection });
    this.$el.html(content);

    this.attachSubviews();
    return this;
  },

  addIndexItem: function(indexItem) {
    var indexItem = new Evernote.Views.NotebooksIndexItem({
      model: indexItem
    });

    this.addSubview('notebook-index', indexItem);
  }
})