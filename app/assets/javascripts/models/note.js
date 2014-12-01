Evernote.Models.Note = Backbone.Model.extend({
	urlRoot: "/api/notes",

	teaserText: function() {
    var slicedContent = "";
    var content = "";
    if (this.attributes.body){
      content = this.attributes.body;
      slicedContent = content.slice(0, 80);
    }
    
    if (content.length > 80) {
      return slicedContent + "...";
    } else {
      return slicedContent;
    }
	}
});