const Home = require("../models/home");

exports.getAddhome = (req, res, next) => {
  res.render("host/addhome", {
    pageTitle: "Add home to airbnb",
    pageTitle: "Add Home to airbnbj",
    currentPage: "addHome",
  });
};

exports.postAddhome = (req, res, next) => {
  console.log("Home Registration successfull  for: ", req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, locatein, rating, photoUrl);
  home.save();

  res.render("host/home-added", {
    pageTitle: "HomeAdded Successfully",
    currentPage: "homeAdded",
  });
};
exports.getHomes = (req, res, next) => {
  Homes.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "sirbnb Home",
      currentPage: "Home",
    })
  );
};
