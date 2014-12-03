Evernote.Views.NotebookIndexHeader = Backbone.CompositeView.extend({
  template: JST["notebooks/index_header"],

  initialize: function() {
    this.addNewNotebook();
  },

  render: function() {
    var content = this.template({

    });
    this.$el.html(content);
    return this;
  },

  addNewNotebook: function() {
    var newNotebook = new Evernote.Views.NotebooksNew();

    this.addSubview('.new-notebook', newNotebook);
  }
});
