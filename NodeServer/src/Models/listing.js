const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    url: {
        type: String
    },
    altText: {
        type: String
    },
    caption: {
        type: String
    }
})

const ListingSchema = new mongoose.Schema({
    listingId: "",
    userId: "",
    listingTitle: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
        // front end will take the options from options collection
    },
    tags: {
        type: String,
        required: true,
        // front end will take the options from options collection
    },
    images: [ImageSchema],
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
        user: "",
    }, ],
});

const Listing = mongoose.model('Listing', ListingSchema)

module.exports = Listing;