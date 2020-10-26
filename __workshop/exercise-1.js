// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let r = [];
    for (let n = 0; n < array.length; n++) {
      if (typeof array[n] !== "string") {
        reject("There is a non-string in the list!");
      }
      r.push(array[n].toUpperCase());
    }
    resolve(r);
    return r; // no need to return but do so anyway
  });
};
//console.log(makeAllCaps(arrayOfWords));
const sortWords = (array) => {
  // write some code
  return new Promise((res, rej) => {
    array.forEach((element) => {
      if (typeof element !== "string") {
        rej("There is a non-string in the list!");
      }
    });
    let r = [...array].sort((a, b) => {
      a[0] - b[0] < 0;
    });
    res(r);
    return r;
  });
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
