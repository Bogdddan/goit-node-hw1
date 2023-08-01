const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const FILE_PATH = path.join(__dirname, "contacts.json");

async function read() {
  const data = await fs.readFile(FILE_PATH, "utf-8");

  return JSON.parse(data);
}

function write(data) {
  return fs.writeFile(FILE_PATH, JSON.stringify(data));
}

async function listContacts() {
  const data = await read();

  return data;
}

async function getContactById(id) {
  const data = await read();

  return data.find((contact) => contact.id === id);
}

async function addContact({contact}) {
  const data = await read();

  const newContact = { ...contact, id: crypto.randomUUID() };

  data.push(newContact);

  await write(data);

  return newContact;
}

async function removeContact(id) {
  const data = await read();

  const index = data.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return undefined;
  }

  const newContacts = [...data.slice(0, index), ...data.slice(index + 1)];

  await write(newContacts);

  return data[index];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact
};