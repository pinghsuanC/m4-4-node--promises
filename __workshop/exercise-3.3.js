// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    q: `${lat}, ${lng}`,
  };

  // return ...
  return new Promise((res, rej) => {
    opencage
      .geocode(requestObj)
      .then((data) => {
        if (data.status.code === 200 && data.results.length > 0) {
          res(data.results[0].formatted);
        } else {
          rej("Something went wrong... didn't find the place you want.");
        }
      })
      .catch((err) => {
        console.log("error", error.message);
      });
  });
}

// getAddressFromPosition("48.8584", "2.2945").then((response) =>
//   console.log(response)
// );

module.exports = { getAddressFromPosition };
