// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// get the code you wrote in 2.2 and paste it here...

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data.text; // 2
    })
    .catch((err) => {
      return err.error ? `${JSON.parse(err.error).message}: ${langCode}` : err;
    });
};

// Testing
greeting("fr").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
greeting("zh").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("en").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("13").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
