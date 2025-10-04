
const Homes = require("../models/home");
exports.getIndex = (req, res, next) => {
  Homes.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Homes.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  Homes.fetchAll((registeredHomes) =>
    res.render("store/booking", {
      registeredHomes: registeredHomes,
      pageTitle: "My Bookings",
      currentPage: "bookings",
    })
  );
};

exports.getfavouriteList = (req, res, next) => {
  Homes.fetchAll((registeredHomes) =>
    res.render("store/favourite", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
  );
};

exports.getHomeDetails = (req, res, next) => {
const homeId = req.params.homeId;
console.log (" AT home details page", homeId);
Home.findById (homeId, home => {
  if (!home ) {
    console.log ("Home not Found")
    res.redirect("/homes");
  }  else{
    res.render ("store/Home-detail", {
      Home: home,
  pageTitle: "Home Detail",
  CurrentPage: "Home",
});
  }
})
};