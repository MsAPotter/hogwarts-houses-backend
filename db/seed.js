const mongoose = require('./connection')
const Character = require('./models/characters')
const charjson = require('../db/characters.json')

//////////////////// ATTEMPT TO SEED USING AXIOS
/////////////////// TOO MUCH DATA --> DIDNT KNOW HOW TO LIMIT RESPONSE

// const axios = require('axios')

// const url = 'https://www.potterapi.com/v1/characters/?key=$2a$10$63GTbZLWfMtyBrCfDRaRyus98dC5tg6PikwPTPaVUgtJkUeEBsJpy'


// Character.find({}).deleteMany({}).then(() => { 
//     console.log('deleted all characters')
//         makeRequest()
// })

// function makeRequest() {
//     axios.get(url)
//         .then((response) => {
//             console.log('request working')
//             Character.collection.insert(response)
               
//             .then(characters => {
//                 console.log(response)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//         })
// }
////////////////////////////////////////
////////////////////////////////////////


Character.find({}).deleteMany({}).then(() => { 
    console.log('deleted all characters')
        
    
    Character.create(charjson).then((newChar) => {   
        console.log(newChar)
    })
})