const fs = require('fs');
fs.readFile("file.txt", "utf-8", function (err, data) {
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("file.txt", data, function (err) {
        if (err) throw err;
        else console.log("file updated");
    });
});