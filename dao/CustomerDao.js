const customers = [{id : 'unilever',  name : 'Unilever'},
                   {id : 'apple',     name : 'Apple'},
                   {id : 'nike',      name : 'Nike'},
                   {id : 'ford',      name : 'Ford'},
                   {id : 'other',     name : 'Other'}]

class CustomerDao {

  constructor() {
    console.log('Instantiating CustomerDao')
  }

  listAll(){
    return customers
  }

  findById(id){
    for(let i=0; i<customers.length; i++){
      console.log('Comparing id=' + id + ' with ' + customers[i].id)
      if(id == customers[i].id)
        return customers[i]
    }
    return null
  }

}

module.exports = new CustomerDao
