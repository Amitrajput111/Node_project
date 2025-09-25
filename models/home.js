const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, locations, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll() {
    const HomeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("File read: ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
