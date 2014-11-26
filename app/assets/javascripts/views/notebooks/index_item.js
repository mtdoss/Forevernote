Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],
  className: 'notebook-index-item',

  initialize: function(options) {
    this.parent = options.parent
  },

  events: {
    "click": "addNotebookShow"
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });

    this.$el.html(content);
    return this;
  },

  addNotebookShow: function(event) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this.model.fetch();
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model
    });
    this._currentView = notebookShow
    // this.$el.find('.notebook-show').html(notebookShow.render().$el)
    this.parent.addSubviewReplacement('.notebook-show', notebookShow);
  }
})