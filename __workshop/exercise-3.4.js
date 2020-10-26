// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getIssPosition } = require("./exercise-3.1.js");
const { getPositionFromAddress } = require("./exercise-3.2.js");
const { getAddressFromPosition } = require("./exercise-3.3.js");

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  // write a new Promise here...
  return new Promise((res, rej) => {
    Promise.all([getIssPosition(), getPositionFromAddress(address)])
      .then((values) => {
        res(getDistance(values[0], values[1]));
      })
      .catch((err) => console.log("Error: ", err.message));
  });
};

getDistanceFromIss(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((result) => console.log(result));
