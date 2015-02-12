Evernote.Collections.Tags = Backbone.Collection.extend({
  url: "/api/tags",
  model: Evernote.Models.Tag,

  initialize: function(options) {
  }
});

Evernote.Collections.tags = new Evernote.Collections.Tags();
