window.Evernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Evernote.Routers.Router({ rootEl: "#main" });

    Backbone.history.start();
  }
};

$(document).ready(function() {
  Evernote.initialize();
});