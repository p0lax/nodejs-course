const yargs = require('yargs');
const TITLE_PARAM_DESCRIPTION = { 
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const BODY_PARAM_DESCRIPTION = { 
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const argv = yargs
	.command('add', 'Add a new note', {
		title: TITLE_PARAM_DESCRIPTION,
		body: BODY_PARAM_DESCRIPTION
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: TITLE_PARAM_DESCRIPTION
	})
	.command('remove', 'Remove a note', {
		title: TITLE_PARAM_DESCRIPTION
	})
	.help()
	.argv;

const notes = require('./notes');
const COMMANDS = {
	ADD: 'add', 
	LIST: 'list',
	READ: 'read',
	REMOVE: 'remove'
};

switch (argv._[0]) {
	case COMMANDS.ADD:
		notes.addNote(argv.title, argv.body);
		break;
	case COMMANDS.LIST:
		notes.getList();
		break;
	case COMMANDS.READ:
		notes.readNote(argv.title);
		break;
	case COMMANDS.REMOVE:
		notes.removeNote(argv.title);
		break;
	default: 
		throw new Error('Wrong command type');
}