import Product from 'models/product';

var ProductsCollection = Backbone.Collection.extend({
  model: Product,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/messages",
  comparator: 'createdAt'
});

export default ProductsCollection;
