const mongoose = require('mongoose');
const {model} = require('mongoose');
const {holdingSchema} = require("../Schema/holding");

const holdingsModel = mongoose.model('holding',holdingSchema);
module.exports = {holdingsModel};