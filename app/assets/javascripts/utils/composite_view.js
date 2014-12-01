Backbone.CompositeView = Backbone.View.extend({

  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview.render());
  },

  //bad
  //TODO: fix this, and also figure out why it was working earlier
  addSubviewReplacement: function (selector, subview) {
    this.subviews(selector).forEach(function( subview2 ){
      this.removeSubview(selector, subview2)
    }.bind(this))
    this.subviews(selector).push(subview);
    this.replaceSubview(selector, subview.render());
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);

    subview.delegateEvents();
    subview.onRender && subview.onRender();

    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  attachSubviews: function () {
    var view = this;

    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function() {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();
    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1)
  },

  //bad
  //TODO: fix this
  replaceSubview: function (selector, subview) {
    this.$(selector).html(subview.$el);

    subview.delegateEvents();

    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});