const products = [{id : 'classic',  name : 'Classic Ad',  price : 269.99},
                  {id : 'standout', name : 'Standout Ad', price : 322.99},
                  {id : 'premium',  name : 'Premium Ad',  price : 394.99}]

class ProductDao {

  constructor() {
    console.log('Instantiating ProductDao')
  }

  listAll(){
    return products
  }

  findById(id){

  }

}

module.exports = new ProductDao
