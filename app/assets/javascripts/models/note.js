Evernote.Models.Note = Backbone.Model.extend({
	urlRoot: "/api/notes",

	teaserText: function() {
    var slicedContent = "";
    var content = "";
    if (this.attributes.body){
      content = this.attributes.body;
      slicedContent = content.slice(0, 150);
    }
    
    if (content.length > 150) {
      return slicedContent + "...";
    } else {
      return slicedContent;
    }
  },

  tags: function() {
    if (!this._tags) {
      this._tags = new Evernote.Collections.Tags( [], { note: this });
    }

    return this._tags;
  },

  parse: function(response) {
    if (response.tags) {
      this.tags().set(response.tags, { parse: true });
      delete response.tags;
    }

    return response;
  }
});