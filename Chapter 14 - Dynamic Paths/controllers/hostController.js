const Home = require("../models/home");

// const getAddHome = (req, res, next) => {
//     res.render('addHome', { pageTitle: 'Add Home to airbnb', currentPage: 'addHome' });
// }

// exports.getAddHome = getAddHome;

exports.getAddHome = (req, res, next) => {
    res.render('host/addHome', { pageTitle: "Add Home to airbnb", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
    // console.log('Home Registration successful for:', req.body);
    const { houseName, price, location, rating, photoUrl } = req.body;

    // const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
    const home = new Home(houseName, price, location, rating, photoUrl);

    // registeredHomes.push(req.body);

    home.save();

    res.render('host/home-Added', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
};

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("host/host-home-list", {
            registeredHomes: registeredHomes,
            pageTitle: "Host Homes List",
            currentPage: "host-homes",
        });
    });
    // console.log(registeredHomes);
    // res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home' });
};

// exports.getHomes = (req, res, next) => {
//     Home.fetchAll((registeredHomes) => {
//         res.render("store/home-list", {
//             registeredHomes: registeredHomes,
//             pageTitle: "airbnb Home",
//             currentPage: "Home",
//         });
//     });
//     // console.log(registeredHomes);
//     // res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home' });
// };

// // exports.registeredHomes = registeredHomes;