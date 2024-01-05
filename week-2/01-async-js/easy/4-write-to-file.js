const fs = require('fs');
const data = "My Name is Prateek"
fs.writeFile("file.txt", data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully.');
  }
});
