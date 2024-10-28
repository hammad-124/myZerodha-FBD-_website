const {model} = require('mongoose');
const {positionSchema} = require("../Schema/position");

const positionModel = mongoose.model('position',positionSchema);
module.exports ={positionModule};