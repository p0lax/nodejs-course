const fs = require('fs');
const _ = require('lodash');

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
    console.error(`The note with title "${title}" and body "${body}" was added to the notes list`);
	},

	getList() {
    const notes = this.fetchNotes();
    _.map(notes, (body, title) => {
      console.log(title, body);
    });
    return notes;
  },

	readNote(title) {
    const notes = this.fetchNotes();
    const body = notes[title];
    if (!body) {
      console.error(`The note with such title isn't exist!`);
      return;
    }
    console.log(`Reading note with title: "${title}" and body: "${body}"`);
    return { title, body };
	},

	removeNote(title) {
		console.log('Removing note: ', title);
	}

};
