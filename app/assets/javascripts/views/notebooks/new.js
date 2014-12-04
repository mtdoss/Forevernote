Evernote.Views.NotebooksNew = Backbone.View.extend({
  template: JST["notebooks/new"],

  events: {
    "click .btn-save": "submit"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var view = this;
    var params = $(event.currentTarget).serializeJSON();
    debugger;
    this.model.set("title", $("#notebook-title").val());
    // this.model.set(params);
    if (this.model.isNew()) {
      Evernote.Collections.notebooks.create(this.model, {});
    } else {
      this.model.save({}, {});
    }

  }
});