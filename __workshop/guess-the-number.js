const inquirer = require("inquirer");
let allowed = 5;
let hiddenNumber = Math.floor(Math.random() * 100 + 1);
//console.log(hiddenNumber);
let prompt = () => {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "guess",
        message: "What is the hidden number between 1 and 100 (inclusive)?",
        validate: function (value) {
          // only integers are accepted
          const pass_int = value.match(/^\d+$/);
          if (pass_int) {
            // check for range and NAN (ensure the parseInt will work fine later)
            if (
              Number.isNaN(parseInt(value)) ||
              parseInt(value) <= 0 ||
              parseInt(value) > 100
            ) {
              return "Please enter an interger between 1 and 100 (inclusive)";
            }
            return true;
          } else {
            return "Please enter an integer";
          }
        },
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      JSON.stringify(answers); // transform the answer
      answer = parseInt(answers["guess"]); // get the element needed
      if (answer !== hiddenNumber && allowed === 1) {
        console.log("You lost! THE END!");
        return "lost";
      } else if (answer !== hiddenNumber && allowed > 1) {
        allowed--;
        console.log(`Wrong guess, allowed guess left: ${allowed}`);
        console.log(
          `HINT: Your guess is ${
            answer < hiddenNumber ? "lower" : "higher"
          } than the answer.`
        );
        prompt(); // call prompt
      } else if (answer === hiddenNumber && allowed > 0) {
        console.log("You Won!");
        return "won";
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
};

prompt();
