const contacts = require("./db/contacts.js");

contacts.getContactById("AeHIrLTr6JkxGE6SN-0Rw").then(contacts => console.log(contacts)).catch(err => console.error(err));stwep 