class PricingRulesController{

  constructor() {
    console.log('Instantiating PricingRulesController')
  }

  calculate(products){

    let amount = 0.00

    for(let i=0; i<products.length; i++){

      if(products[i].special){
        switch(products[i].special.type){
          case 'nForM':
            amount += this.calculateNForM(products[i])
            break;
          case 'discount':
            amount += this.calculateDiscount(products[i])
            break;
          case 'nOrMore':
            amount += this.calculateNOrMore(products[i])
            break;
          default:
            amount += this.calculateNormal(products[i])
        }
      } else {
        amount += this.calculateNormal(products[i])
      }

    }

    return amount

  }

  calculateNOrMore(product){
    let n = parseInt(product.special.param1)
    let newPrice = product.special.param2
    let quantity = parseInt(product.quantity)
    let amount = 0.00

    if(quantity >= n)
      amount = quantity * newPrice
    else
      amount = quantity * product.price

    return amount
  }

  calculateDiscount(product){
    let newPrice = product.special.param1

    return  (parseInt(product.quantity) * newPrice)
  }

  calculateNForM(product){
    let n = parseInt(product.special.param1)
    let m = parseInt(product.special.param2)
    let quantity = parseInt(product.quantity)
    let amount = 0.00

    while(quantity >= n) {
      quantity = quantity - n
      amount += m * product.price
    }
    amount += quantity * product.price

    return amount
  }

  calculateNormal(product){

    return (parseInt(product.quantity) * product.price)
  }
}

module.exports = new PricingRulesController
