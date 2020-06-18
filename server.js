let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

let app = express()
app.use(express.static(path.join(__dirname, 'vue-mel', 'dist')))

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server m running on port', server.address().port)
})
