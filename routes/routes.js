let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message': 'hello from Coleman clinic!'})
})

module.exports = router