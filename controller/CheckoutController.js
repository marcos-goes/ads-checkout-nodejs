const ProductDao = require('../dao/ProductDao')
const CustomerDao = require('../dao/CustomerDao')

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
    console.log('User selection: ' + userSelection);

    let selectedCustomer = CustomerDao.findById(userSelection.selectCustomer)
    let products = ProductDao.listAll()
/*
    for(let i=0; i<products.length; i++){
      products[i].
    }
*/

    res.format({
      html: () => {
        res.render('checkout/finalize', {userSelection : userSelection, selectedCustomer : selectedCustomer})
      }
    })

  }



}

module.exports = new CheckoutController
