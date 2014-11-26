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
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model
    });
    this.parent.addSubview('.notebook-show', notebookShow);
    console.log(this.parent);
    console.log(this.model);
  }
})

// this.parent.addSubview('...', ''.., )