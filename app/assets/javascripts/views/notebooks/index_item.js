Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],
  className: 'notebook-index-item',

  initialize: function(options) {
    this.parent = options.parent;
    this.listenTo(this.model.notes(), "add", this.render);
  },

  events: {
    "click": function(event) {
      this.addNotebookShow(event);
      this.classChange(event);
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
    // if (this._currentView) {
    //   this._currentView.remove();
    // }
    this.model.fetch();
    var notebookShow = new Evernote.Views.NotebooksShow({
      model: this.model,
      parent: this
    });
    // this._currentView = notebookShow
    // this.$el.find('.notebook-show').html(notebookShow.render().$el)
    this.parent.addSubviewReplacement('.notebook-show', notebookShow);
  },

  classChange: function(event) {
    if (this.parent._clickedOn) {
      this.parent._clickedOn.css({background: '#E1E2E5' });
    }

    this.parent._clickedOn = $(event.currentTarget);
    this.parent._clickedOn.css({background: '#ADADB1'});
  }
});