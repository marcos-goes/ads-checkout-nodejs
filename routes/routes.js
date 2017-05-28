const IndexController = require('../controller/IndexController')
const ProductsController = require('../controller/ProductsController')
const CheckoutController = require('../controller/CheckoutController')

function routes (app) {
  app.get('/', CheckoutController.begin)

  app.get('/products', ProductsController.listAll)

  app.get('/checkout', CheckoutController.begin)
  app.post('/checkout', CheckoutController.finalize)

}

module.exports = routes
