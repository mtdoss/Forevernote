Evernote.Collections.Notebooks = Backbone.Collection.extend({
  model: Evernote.Models.Notebook,
  url: "/api/notebooks",

  // getOrFetch: function(id) {
  //   var notebooks = this;
  //   var notebook = this.get(id);
  //
  //   if (!notebook) {
  //     notebook.fetch({
  //       success:
  //     })
  //   }
  // }
});
Evernote.Collections.notebooks = new Evernote.Collections.Notebooks();