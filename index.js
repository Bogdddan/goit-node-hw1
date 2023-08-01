const { program } = require("commander");

const Contacts = require("./db/contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      return contacts;
    case "get":
      const contact = await Contacts.getContactById(id);
      return contact;
    case "add":
      const newContact = await Contacts.addContact({ name, email, phone });
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
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author")
  .option("-n, --name <name>", "Book name")
  .option("-e, --email <email>", "Book email")
  .option("-p, --phone <phone>", "Book phone")

console.log(process.argv);
program.parse(process.argv);

const options = program.opts();

console.log(options);

invokeAction(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  // node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22