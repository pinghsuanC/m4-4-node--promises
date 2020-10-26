// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
//const request = require("request-promise");
const api_url = "https://api.opencagedata.com/geocode/v1/json";

const getPositionFromAddress = (address) => {
  requestObj = {
    // key is in the .env variable
    q: address,
  };
  // return something...
  return new Promise((res, rej) => {
    opencage
      .geocode(requestObj)
      .then((data) => {
        JSON.stringify(data);
        //sconsole.log(data);
        if (data.status.code === 200 && data.results.length > 0) {
          res(data.results[0].geometry);
        } else {
          rej("Something went wrong... Result Not Found...");
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  });
};

// getPositionFromAddress(
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
