const fs = require('fs');

module.exports = {
	
	addNote(title, body) {
		const note = { title, body };
		fs.writeFileSync('notes.json', JSON.stringify(note));
		console.log('Adding note: ', title, body);
	},

	getList() {
		const note = fs.readFileSync('notes.json');
		console.log('Getting list of notes', JSON.parse(note));
	},

	readNote(title) {
		console.log('Reading note: ', title);
	},

	removeNote(title) {
		console.log('Removing note: ', title);
	}

};
