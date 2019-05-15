const express = require('express')
app = express()

const parser = require('body-parser')

const CharacterController = require('./controllers/characters')

app.use(parser.urlencoded({extended: true}))    
app.use(parser.json())  

app.get('/', (req, res) => {
	res.redirect('/characters/')
})

app.use('/characters/', CharacterController)



// app.set("port", process.env.PORT || 3001)

// app.listen(app.get("port"), () => {
//     console.log(`✅ PORT: ${app.get("port")} 🌟`)
//   })

app.listen(4000, () => console.log('They see me rollin...on port 4000...'))
