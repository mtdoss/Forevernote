Evernote.Views.NotebooksIndex = Backbone.CompositeView.extend({
  template: JST["notebooks/index"],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    // is filled yet?
    this.addAllIndexItems();
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

    this.addSubview('.notebook-list', indexItem);
  },

  addAllIndexItems: function() {
    this.collection.each(function (notebook) {
      this.addIndexItem(notebook);
    }.bind(this));
  }
})