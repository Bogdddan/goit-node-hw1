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
  return data.find((book) => book.id === id);
}

async function addContact(book) {
  const data = await read();
  const newBook = { ...book, id: crypto.randomUUID() };
  data.push(newBook);
  await write(data);
  return newBook;
}

async function removeContact(id) {
  const data = await read();
  const index = data.findIndex((book) => book.id === id);
  if (index === -1) {
    return undefined;
  }
  const newBooks = [...data.slice(0, index), ...data.slice(index + 1)];
  await write(newBooks);
  return data[index];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact
};