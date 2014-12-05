Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],
  className: 'notebook-index-item notebook-tag-index-item',

  initialize: function(options) {
    this.parent = options.parent;
    this.listenTo(this.model.notes(), "add", this.render);
  },

  events: {
    "click": function(event) {
      this.addNotebookShow(event);
      // this.clearFirst();
    }
  },

  clearFirst: function() {
    debugger;
    if ($('.note-index-item').length === 0) {
    this._child._first = false;
    }
  },

  render: function() {
    var content = this.template({
      notebook: this.model,
      length: this.model.notes().length
    });
    this.$el.html(content);
    return this;
  },

  addNotebookShow: function(event) {
    this.model.fetch();
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model,
      parent: this
    });
    this._child = notebookShow;
    // this._currentView = notebookShow
    // this.$el.find('.notebook-show').html(notebookShow.render().$el)
    this.parent.addSubviewReplacement('.notebook-show', notebookShow);
  },
});