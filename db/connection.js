const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hp-characters', { useNewUrlParser: true })

// if (process.env.NODE_ENV == "production") {
// 	mongoose.connect(process.env.DB_URL)
//   } else {
// 	mongoose.connect("mongodb://localhost/hp-characters")
//   }

mongoose.Promise = Promise

module.exports = mongoose