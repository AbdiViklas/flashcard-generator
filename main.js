var basicCard = require("./basicCard");
var clozeCard = require("./clozeCard");
var inquirer = require("inquirer");

// Give user choice between basic and cloze-deleted card
inquirer.prompt([
  {
    name: "basicVCloze",
    type: "rawlist",
    message: "Which kind of flashcard would you like to create?",
    choices: ["Basic (Q on front, A on back)", "Cloze-deleted (e.g. '... was the first president')"]
  }
])
.then(answer => {
  if (answer.basicVCloze === "Basic (Q on front, A on back)") {
    // if user chooses basic card, get front and back values
    inquirer.prompt([
      {
        name: "front",
        type: "input",
        message: "What is the question on the front of the card?"
      }, {
        name: "back",
        type: "input",
        message: "What is the answer on the back?"
      }
    ])
    .then(answers => {
      // using the answers, construct a new basic card and log it
      var newBasic = new basicCard(answers.front, answers.back);
      console.log(`  BASIC: \n  Front: ${newBasic.front}\n  Back: ${newBasic.back}`)
    });
  } else {
    // if user chooses cloze-deleted card, get values for full text and cloze
  }
});

// var georgeBasic = new basicCard("Who the first prez?", "Georgie W., baby!");

// var georgeCloze = clozeCard("George Washington was the first president.", "george Washington");

// console.log(`
//   CLOZE-DEL:
//   Partial: ${georgeCloze.partial}
//   Full: ${georgeCloze.fullText}
// `);