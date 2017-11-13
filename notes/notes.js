module.exports = {
	
	addNote(title, body) {
		console.log('Adding note: ', title, body);
	},

	getList() {
		console.log('Gettong list of notes');
	},

	readNote(title) {
		console.log('Reading note: ', title);
	},

	removeNote(title) {
		console.log('Removing note: ', title);
	}
	
};
