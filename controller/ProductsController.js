const ProductDao = require('../dao/ProductDao')

class ProductsController {

  constructor() {
    console.log('Instantiating ProductsController')
  }

  listAll(req, res) {
    console.log('Request to ProductsController.listAll.')

    let products = ProductDao.listAll()

    res.format({
      html: () => {
        res.render('products/list', {products : products})
      },
      json: () => {
        res.json(products)
      }
    })
  }

}

module.exports = new ProductsController
