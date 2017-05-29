const ProductDao = require('../dao/ProductDao')
const CustomerDao = require('../dao/CustomerDao')
const PricingRules = require('../controller/PricingRulesController')

class CheckoutController {

  constructor() {
    console.log('Instantiating CheckoutController')
  }

  begin(req, res){
    console.log('Request to CheckoutController.begin.')

    let products = ProductDao.listAll()
    let customers = CustomerDao.listAll()

    res.format({
      html: () => {
        res.render('checkout/begin', {customers : customers, products : products})
      }
    })
  }


  finalize(req, res){
    console.log('Request to CheckoutController.finalize.')

    let userSelection = req.body

    let selectedCustomer = CustomerDao.findById(userSelection.selectCustomer)
    let products = ProductDao.listAll()

    for(let i=0; i<products.length; i++){
      let key = "PROD-" + products[i].id
      products[i].quantity = req.body[key]
    }

    console.log(selectedCustomer)
    console.log(products)
    console.log(PricingRules.calculate(products))

    res.format({
      html: () => {
        res.render('checkout/finalize', {products : products, selectedCustomer : selectedCustomer})
      }
    })

  }



}

module.exports = new CheckoutController
