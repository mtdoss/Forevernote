Evernote.Collections.Notebooks = Backbone.Collection.extend({
  model: Evernote.Models.Notebook,
  url: "/api/notebooks",

  getOrFetch: function(id) {
    var notebooks = this;
    var notebook = this.get(id);

    if (!notebook) {
      notebook = new Evernote.Models.Notebook({ id: id });
      notebook.fetch({
        success: function() { notebooks.add(notebook) }
      });
    } else {
      notebook.fetch();
    }
    return notebook;
  }
});

Evernote.Collections.notebooks = new Evernote.Collections.Notebooks();