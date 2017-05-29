class PricingRulesController{

  constructor() {
    console.log('Instantiating PricingRulesController')
  }


  calculate(products){

    let amount = 0.00

    for(let i=0; i<products.length; i++){
      amount += this.calculateNormal(products[i])
    }

    return amount

  }


  calculateNormal(product){
    console.log(product)
    return (parseInt(product.quantity) * product.price)
  }


}

module.exports = new PricingRulesController
