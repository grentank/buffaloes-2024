const fs = require('fs');

function myReadFilePromisified(filename) {
  return new Promise((res, rej) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
}

myReadFilePromisified('./nickname.txt').then(console.log);
