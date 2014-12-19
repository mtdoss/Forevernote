Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],

  className: 'notebook-index-item notebook-tag-index-item',

  initialize: function(options) {
    this.parent = options.parent;
    this.model.fetch();
    this.listenTo(this.model.notes(), "add remove", this.render);
  },

  events: {
    "click": function(event) {
      this.addNotebookShow(event);
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
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model,
      parent: this
    });
    this._child = notebookShow;
    this.parent.addSubviewReplacement('.notebook-show', notebookShow);
    this._child.selectFirst();
  },
});