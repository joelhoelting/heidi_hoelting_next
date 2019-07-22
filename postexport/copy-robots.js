const fs = require('fs');

exports.copyRobots = () => {
  fs.copyFile('./postexport/robots.txt', './out/robots.txt', err => {
    if (err) throw err;
    console.log('Robots.txt was copied to destination');
  });
};
