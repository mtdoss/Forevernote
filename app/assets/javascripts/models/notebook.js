Evernote.Models.Notebook = Backbone.Model.extend({
  urlRoot: "/api/notebooks",

  notes: function() {
    if (!this._notes) {
      this._notes = new Evernote.Collections.Notes([], { notebook: this });
    }

    return this._notes;
  }
});