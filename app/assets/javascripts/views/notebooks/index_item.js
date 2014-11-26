Evernote.Views.NotebooksIndexItem = Backbone.View.extend({
  template: JST["notebooks/index_item"],

  events: {
    "click": "doStuff"
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });

    this.$el.html(content);
    return this;
  },

  doStuff: function(event) {
    // console.log("hi");
  }
})