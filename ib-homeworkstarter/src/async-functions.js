const giveItBackLater = (value, callback) => {
  function loadComplete() {
    callback(value)
    }
    setTimeout(loadComplete, 1000);
};

const addSomePromises = (somePromise) => {};
const promiseToGiveItBackLater = (value) => {};

module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
  }

  