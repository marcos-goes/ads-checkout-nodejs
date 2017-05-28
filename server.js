const app = require('./custom-express')//()
const http = require('http').Server(app)
const port = 3000

  let server = http.listen(port, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('Server online localhost:' + port)
  console.log('CTRL+C to exit. ')
})
