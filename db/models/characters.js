const mongoose = require('../connection');

const CharacterSchema = new mongoose.Schema({
	name: String,
	house: String,
	patronus: String,
	school: String,
	alias: String,
	animagus: String,
	role: String,
	species: String
});

let Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
