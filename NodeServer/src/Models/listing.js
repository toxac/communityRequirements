const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
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
    images: {
        type: [ImageSchema]
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    stock: {
        measure: { type: String },
        quantity: { type: Number },
    },
    /* Should we manage inventory?
        A array field which will capture all the inventory changes
        or should we do it in separate collection
    */
    listingAttributes: {},
    labels: {
        type: [String] // maybe it can come from a option collection
    },
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