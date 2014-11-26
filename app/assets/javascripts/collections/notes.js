Evernote.Collections.Notes = Backbone.Collection.extend({
  url: "/api/notes",
  model: Evernote.Models.Note,

  initialize: function(models, options) {
    this.notebook = options.notebook;
  }
})