const route = require('express').Router()

const user = require('../controller/user')

route.post('/create',user.create)
route.get('/getalluser',user.findAll)
route.get('/getuser/:id',user.findByPk)
route.put('/updateuser/:id',user.update)
route.delete('/deleteuser/:id',user.delete)

module.exports = route