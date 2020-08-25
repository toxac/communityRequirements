const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listingId: "",
    userId: "",
    listingTitle: "",
    categories: "",
    tags: "",
    images: "",
    price: "",
    description: "",
    stock: "",
    listingAttributes: {},
    labels: "auto detect and suggest labels",
    discount: "",
    coupons: "",
    deliveryPolicy: "can be set at store level or listing level",
    returnPolicy: "can be set at store level or listing level",
    status: "approved, under review, flagged, restricted",
    reviewsAndRating: [{
        rating: 3,
        reviews: "",
        user: ""
    }]

})

const Listing = mongoose.model('Listing', ListingSchema)

module.exports = Listing;