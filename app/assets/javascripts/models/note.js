Evernote.Models.Note = Backbone.Model.extend({
	urlRoot: "/api/notes",

	teaserText: function() {
    var content = this.attributes.body;
    var slicedContent = content.slice(0, 80);
    if (content.length > 80) {
      return slicedContent + "...";
    } else {
      return slicedContent;
    }
	}
});