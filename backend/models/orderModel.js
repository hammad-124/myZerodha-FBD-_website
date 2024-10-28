const {model} = require('mongoose');
const {orderSchema} = require('../Schema/order');

const orderModel = mongoose.model('order',orderModel);
module.exports = {orderModel};