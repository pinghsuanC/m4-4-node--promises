// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request("http://api.open-notify.org/iss-now.json")
    .then((res) => {
      return JSON.parse(res);
    })
    .then((parsedRes) => {
      const { latitude: lat, longitude: lng } = parsedRes.iss_position;
      return { lat, lng };
    })
    .catch((err) => {
      return err.error;
    });
};

// getIssPosition().then((res) => {
//   console.log(res);
// });

module.exports = { getIssPosition };
