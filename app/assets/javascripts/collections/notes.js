Evernote.Collections.Notes = Backbone.Collection.extend({
  url: "/api/notes",
  model: Evernote.Models.Note,
  comparator: function(note){
    
    var date = new Date(note.get('created_at'));
    return -date.getTime();

  },
  // comparator: "title",
  
  initialize: function(models, options) {
    this.notebook = options.notebook;
    this.tag = options.tag;
  }
});