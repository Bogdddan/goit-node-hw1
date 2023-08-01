const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const contactPath = path.join(__dirname, "/contacts.json");

async function read() {
  const data = await fs.readFile(contactPath, "utf8");
  return JSON.parse(data);
}

function write(data) {
  return fs.writeFile(contactPath, JSON.stringify(data));
}

async function listContacts() {
  const contacts = await read();
  return contacts;
}

async function getContactById(id) {
  const data = await read();
  return data.find(contact => contact.id === id);
}

async function createContact(contact) {
  const data = await read();
  const newBook = { ...contact, id: crypto.randomUUID() };
  data.push(newBook);
  await write(data);
  return newBook;
}

async function removeContact(id) {
  const data = await read();
  const index = data.findIndex(contact => contact.id === id);
  if (index === -1) {
    return undefined;
  }
  const newContacts = [
  ...data.slice(0, index),
  ...data.slice(index + 1),
  ];
  await write(newContacts);
  return 'успіх';
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  createContact
}