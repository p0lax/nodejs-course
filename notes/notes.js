const fs = require('fs');

module.exports = {

  fetchNotes() {
		try {
			const notesString = fs.readFileSync('notes.json');
			return JSON.parse(notesString);
		} catch (ex) {
			return [];
    }
  },

  saveNotes(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  },

	addNote(title, body) {
		const notes = this.fetchNotes();

		if (notes[title]) {
      console.error('The note with such title is already exist!');
      return;
    }
    notes[title] = body;
    this.saveNotes(notes);	
    console.error(`The note with title "${title}" was added to the notes list`);
	},

	getList() {
    const notes = this.fetchNotes();
    notes.map((note) => {
      console.log(note.title, note.body);
    });
  },

	readNote(title) {
		console.log('Reading note: ', title);
	},

	removeNote(title) {
		console.log('Removing note: ', title);
	}

};
