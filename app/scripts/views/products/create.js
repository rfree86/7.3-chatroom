var CreateProductView = Backbone.View.extend({
  template: JST['products/create'],

  events: {
    'submit form': 'createProduct'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  createProduct: function(e) {
    e.preventDefault();
    var message = this.$('input[name=message]').val();

    this.collection.create({
      message: message,
      username: appRouter.currentUser
    });

    this.$('input').not('[type=submit]').val('');
  }

});

export default CreateProductView;
