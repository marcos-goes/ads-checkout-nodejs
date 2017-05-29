const customers = [{id : 'unilever',  name : 'Unilever', special : [{type : 'nForM', product : 'classic', param1 : 3, param2 : 2}]},
                   {id : 'apple',     name : 'Apple',    special : [{type : 'discount', product : 'standout', param1 : 299.99}]},
                   {id : 'nike',      name : 'Nike',     special : [{type : 'nOrMore', product : 'premium', param1 : 4, param2 : 379.99}]},
                   {id : 'ford',      name : 'Ford',     special : [{type : 'nForM', product : 'classic', param1 : 5, param2 : 4}, {type : 'discount', product : 'standout', param1 : 309.99}, {type : 'nOrMore', product : 'premium', param1 : 3, param2 : 389.99}]},
                   {id : 'other',     name : 'Other',    special : []}]

class CustomerDao {

  constructor() {
    console.log('Instantiating CustomerDao')
  }

  listAll(){
    return customers
  }

  findById(id){
    for(let i=0; i<customers.length; i++){
      if(id == customers[i].id)
        return customers[i]
    }
    return  {id : 'other',     name : 'Other',    special : []}
  }

}

module.exports = new CustomerDao
