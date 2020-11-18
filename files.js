const fs = require('fs');


// reading files

fs.readFile('README.md', (err, data) => {
  if (err){
    console.log(err);
  }
    console.log(data.toString());
});

fs.writeFile('hello.txt', 'just some text', () => {
  console.log('file was written');
});