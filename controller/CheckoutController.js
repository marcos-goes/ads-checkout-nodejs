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

    for(let i=0; i<selectedCustomer.special.length; i++){
      for(let j=0; j<products.length; j++){
        if(products[j].id == selectedCustomer.special[i].product)
          products[j].special = selectedCustomer.special[i]
      }
    }

    let total = PricingRules.calculate(products)

    res.format({
      html: () => {
        res.render('checkout/finalize', {products : products, selectedCustomer : selectedCustomer, total : total})
      },
      json: () => {
        res.json(total)
      }
    })

  }



}

module.exports = new CheckoutController
