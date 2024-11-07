const fs = require("fs");

const index = (req, res) => {
  let id = req.params.acc_id;
  fs.readFile("./data.json", "utf-8", (err, content) => {
    let arrContent = JSON.parse(content);
    let currentAcc = arrContent.find((user) => user.id == id);
    res.render("profile", { currentAcc, accounts: arrContent });
  });
};

const deleteProfile = (req, res) => {
  const id = req.params.acc_id;
  fs.readFile("./data.json", "utf-8", (err, content) => {
    if (err) return res.status(500).send("Error reading data.");
    let arrContent = JSON.parse(content);

    // Filtriraj korisnika prema ID-u
    arrContent = arrContent.filter((user) => user.id != id);

    // Spremi ažurirani sadržaj nazad u data.json
    fs.writeFile("./data.json", JSON.stringify(arrContent, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving data.");
      res.status(200).send("Profile deleted successfully.");
    });
  });
};

module.exports = {
  index,
  deleteProfile,
};
