/**
 * Simulate an API call to get a payment token
 * @param {boolean} success
 * @returns {promise} A promise
 */
function getPaymentTokenFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject('Error: API call failed');
    }
  });
}

module.exports = getPaymentTokenFromAPI;
