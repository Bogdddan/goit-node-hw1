const Contacts = require("./db/contacts.js");

// const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      const contacts = await Contacts.listContacts();
      console.log(contacts);
      break;

    case 'get':
      // ... id
      const contact = await Contacts.getContactById(id);
      log(contact);
      break;

    case 'add':
      // ... name email phone
      const newContact = await Contacts.createContact({ title, author });
      console.log(newContact);
      break;

    case 'remove':
      // ... id
      const removedContact = await Contacts.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

console.log(process.argv);

// node index.js --action update --id 12345 --title "Mew Title" --author "New Author"

const actionIndex = process.argv.indexOf("--action");

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  const id = process.argv[actionIndex + 3];
  const name = process.argv[actionIndex + 5];
  const author = process.argv[actionIndex + 7];

  invokeAction({ action, id, name, author })
    .catch(err => console.error(err));

}