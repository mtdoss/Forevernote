Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],
  className: 'notebook-index-item',

  initialize: function(options) {
    this.parent = options.parent
  },

  events: {
    "click": "doStuff"
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });

    this.$el.html(content);
    return this;
  },

  doStuff: function(event) {
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model
    });

    this.parent.addSubview('note-index-item', notebookShow);

  }
})

// this.parent.addSubview('...', ''.., )