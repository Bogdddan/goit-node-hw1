const { program } = require("commander");

const Contacts = require("./db/contacts.js");

async function invokeAction({ action, id, name, title, author }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      return contacts;
    case "get":
      const contact = await Contacts.getContactById(id);
      return contact;
    case "add":
      const newContact = await Contacts.addContact({ name, title, author });
      return newContact;
    case "remove":
      const removedContact = await Contacts.removeContact(id);
      return removedContact;
    default:
      console.log("Unknown action");
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Contacts id")
  .option("-n, --name <name>", "Contacts name") 
  .option("-a, --author <author>", "Contacts author")
  .option("-e, --email <email>", "Contacts email")
  .option("-p, --phone <phone>", "Contacts phone");

console.log(process.argv);
program.parse(process.argv);

const options = program.opts();

console.log(options);

invokeAction(options)
  .catch((err) => console.log(err));
