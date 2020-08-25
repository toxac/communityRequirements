const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: "",
    nickname: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        unique: true,
        required: true,
        max: 10000000000,
        min: 999999999
    },
    addressFlatBuilding: {
        type: String
    },
    addressCommunity: {
        type: String
    },
    addressLocality: {
        type: String
    },
    addressPincode: {
        type: Number,
        max: 1000000,
        min: 99999
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    },
    imagesURLS: [String],
    socialProfile: "",
    geoLocation: {
        lat: { type: Number },
        long: { type: Number }
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    dateOfBirth: " if child then consent of parents required",
    isMinor: {
        type: Boolean,
        default: false
    },
    preferences: ["a", "b"],
    favourites: ["a", "b"],
    advanceProfile: {
        "highestEducation": "",
        "hobbiesAndInterests": "",
        "occupation": ""
    },
    status: "",
    lastLogin: "",

}, { timestamps: true })


const User = mongoose.model('User', UserSchema);

module.exports = User;