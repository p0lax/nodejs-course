const fs = require('fs');

module.exports = {

	addNote(title, body) {
		let notes = {};
		try {
			const notesString = fs.readFileSync('notes.json');
			notes = JSON.parse(notesString);
		} catch (ex) {
			
		}

		if (!notes[title]) {
			notes[title] = body;
			fs.writeFileSync('notes.json', JSON.stringify(notes));	
		}
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
