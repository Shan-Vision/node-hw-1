const { program } = require("commander");

const contacts = require("./contact");

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const contactList = await contacts.listContacts();
			console.log(contactList);
			break;
		case "get":
			const contactById = await contacts.getContactById(id);
			console.log(contactById);
			break;

		case "add":
			const newContact = await contacts.addContact(name, email, phone);
			console.log(newContact);
			break;

		case "remove":
			const deleteContactById = await contacts.removeContact(id);
			console.log(deleteContactById);
			break;
		default:
			console.warn("\x1B[31m Unknown action type!");
			break;
	}
}

program
	.option("-a, --action <type>")
	.option("-i, --id <type>")
	.option("-n, --name <type>")
	.option("-e, --email <type>")
	.option("-ph, --phone <type>");
program.parse();
const option = program.opts();
invokeAction(option);


