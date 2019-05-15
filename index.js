const express = require('express')
app = express()
const cors = require('cors');
const parser = require('body-parser')

const CharacterController = require('./controllers/characters')

app.use(parser.urlencoded({extended: true}))    
app.use(parser.json())  
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/hp/')
})

app.use('/hp/', CharacterController)



// app.set("port", process.env.PORT || 3001)

// app.listen(app.get("port"), () => {
//     console.log(`✅ PORT: ${app.get("port")} 🌟`)
//   })

app.listen(3000, () => console.log('They see me rollin...on port 3000...'))
