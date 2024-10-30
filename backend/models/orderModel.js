const mongoose = require('mongoose');
const {model} = require('mongoose');
const {orderSchema} = require('../Schema/order');

const orderModel = mongoose.model('order',orderSchema);
module.exports = {orderModel};