const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactPath = path.join(__dirname, "db/contacts.json");
const updateContacts = async (contacts) =>
	await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));

async function listContacts() {
	try {
		const data = await fs.readFile(contactPath);
		return JSON.parse(data);
	} catch (error) {
		console.log(error.message);
	}
}

async function getContactById(contactId) {
	try {
		const contacts = await listContacts();
		const updateId = String(contactId);
		const result = contacts.find((item) => item.id === updateId);
		return result;
	} catch (error) {
		console.log(error.message);
	}
}

async function removeContact(contactId) {
	try {
		const contacts = await listContacts();
		const updateId = String(contactId);
		const contactIndex = await contacts.findIndex(
			(item) => item.id === updateId
		);
		if (contactIndex === -1) {
			return null;
		}
		const [result] = contacts.splice(contactIndex, 1);
		await updateContacts(contacts);
		return result;
	} catch (error) {
		console.log(error.message);
	}
}

async function addContact(name, email, phone) {
	try {
		const contacts = await listContacts();
		const newContact = {
			id: nanoid(),
			name,
			email,
			phone,
		};
		contacts.push(newContact);
		await updateContacts(contacts);
		return newContact;
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
