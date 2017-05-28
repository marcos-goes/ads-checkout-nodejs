class IndexController {
  constructor() {
    console.log('Instantiating IndexController')
  }

  home(req, res){
    res.render('home')
  }
}

module.exports = new IndexController
