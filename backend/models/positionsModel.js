const mongoose = require('mongoose');

const {model} = require('mongoose');
const {positionSchema} = require("../Schema/position");

const positionsModel = mongoose.model('position',positionSchema);
module.exports ={positionsModel};