/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    var rs = fs.createReadStream(filePath, {encoding: 'utf8'});
    var line = '';
    var position = 0;
    rs.on('data', (chunk) => {
      lineEndIndex = chunk.indexOf('\n');
      line += chunk;
      if (lineEndIndex !== -1) {
        rs.close();
      } else {
        position += chunk.length;
      }
    });
    rs.on('close', () => {
      line = line.slice(0, position + lineEndIndex);
      resolve(line);
    });
    rs.on('error', (err) => {
      reject(err);
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
