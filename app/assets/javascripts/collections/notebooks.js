Evernote.Collections.Notebooks = Backbone.Collection.extend({
  model: Evernote.Models.Notebook,
  url: "/api/notebooks"
});

Evernote.Collections.notebooks = new Backbone.Collections.Notebooks();