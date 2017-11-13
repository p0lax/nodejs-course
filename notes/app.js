const yargs = require('yargs');
const argv = yargs.argv;

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