const Home = require("../models/home");

// const getAddHome = (req, res, next) => {
//     res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'addHome' });
// }

// exports.getAddHome = getAddHome;

// exports.getAddHome = (req, res, next) => {
//     res.render('host/addHome', { pageTitle: "Add Home to airbnb", currentPage: "addHome" });
// };

// exports.postAddHome = (req, res, next) => {
//     // console.log('Home Registration successful for:', req.body);
//     const { houseName, price, location, rating, photoUrl } = req.body;

//     // const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
//     const home = new Home(houseName, price, location, rating, photoUrl);

//     // registeredHomes.push(req.body);

//     home.save();

//     res.render('host/home-Added', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
// };

exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("store/index", {
            registeredHomes: registeredHomes,
            pageTitle: "airbnb Home",
            currentPage: "index",
        });
    });
    // console.log(registeredHomes);
    // res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home' });
};

exports.getHomes = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("store/home-list", {
            registeredHomes: registeredHomes,
            pageTitle: "Homes List",
            currentPage: "Home",
        });
    });
    // console.log(registeredHomes);
    // res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home' });
};


exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {
        // registeredHomes: registeredHomes,
        pageTitle: "My Bookings",
        currentPage: "bookings",
    });
};

exports.getFavouriteList = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("store/favourite-list", {
            registeredHomes: registeredHomes,
            pageTitle: "My Favourites",
            currentPage: "favourites",
        });
    });
    // res.render("store/bookings", {
    //     // registeredHomes: registeredHomes,
    //     // pageTitle: "My Favourites",
    //     // currentPage: "favourites",
    // });
};
// // exports.registeredHomes = registeredHomes;