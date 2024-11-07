const fs = require("fs");

const homeCtrl = (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, file) => {
    res.render("index", { accounts: JSON.parse(file) });
  });
};

module.exports = homeCtrl;
