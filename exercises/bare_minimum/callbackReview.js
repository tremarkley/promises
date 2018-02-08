/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
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
    callback(null, line);
  });
  rs.on('error', (err) => {
    callback(err);
  });
};
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, response, body) => {
    if (response !== undefined) {
      callback(err, response.statusCode);
    } else {
      callback(err, null);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
