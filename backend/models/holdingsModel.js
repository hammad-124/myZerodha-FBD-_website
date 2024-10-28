
const {model} = require('mongoose');
const {holdingSchema} = require("../Schema/holdings");

const holdingsModel = mongoose.model('holding',holdingSchema);
module.exports = {holdingsModel};