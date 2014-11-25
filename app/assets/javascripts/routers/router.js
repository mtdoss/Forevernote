Evernote.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = $(options.rootEl);
  },

  routes: {
    "": "notebooksIndex"
  },

  notebooksIndex: function() {
    var notebooks = Evernote.Collections.boards();
    notebooks.fetch();
    var indexView = new Evernote.Views.NotebooksIndex({
      collection: notebooks
    });

    this._swapView(indexView);
  }




  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }

    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})