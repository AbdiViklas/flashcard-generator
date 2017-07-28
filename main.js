var basicCard = require("./basicCard");
var clozeCard = require("./clozeCard");

var georgeBasic = new basicCard("Who the first prez?", "Georgie W., baby!");

var georgeCloze = clozeCard("George Washington was the first president.", "george Washington");

console.log(`
  BASIC:
  Front: ${georgeBasic.front}
  Back: ${georgeBasic.back}
`)

console.log(`
  CLOZE-DEL:
  Partial: ${georgeCloze.partial}
  Full: ${georgeCloze.fullText}
`);