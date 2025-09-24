const Home = requires("../models/home");

exports.getAddhome= (req, res, next) => {
  res.render("add-home",{pageTitle:'Add home to airbnb',
    pageTitle: "Add Home to airbnbj",
    currentPage: "addHome",
  });
 }


 exports.postAddhome = (req, res, next) => {
  console.log ("Home Registration successfull  for: ", req.body);
  const { houseName,price, location,rating, photoUrl;}=req.body;
  const home = new Home(houseName,price,locatein,rating,photoUrl);
  home.save();

  res.render ("homeAdded",{pageTitle: "HomeAdded Successfully",currentPage: "homeAdded",})
};
exports.getHomes =(req, res , next ) =>{
    const registeredHomes = Home.fetchSll 
    console.log (registeredHomes);
    res.render ('home',{registeredHomes: registeredHomes, pageTitle:'airbnb Home',currentPage: "addHome",
    });
       
}