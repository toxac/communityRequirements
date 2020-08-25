const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    shopId: "",
    userId: "",
    policies: "",
    bank: "",
    proofs: "",
    documentation: "",
    description: "",
    aboutSeller: "",
    verification: "",
    status: "",

})

const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop