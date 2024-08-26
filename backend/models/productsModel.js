const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the product schema

const productSchema = new Schema({
    id:{
        type:Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
}, {timestamps : true})

// Create the Product model

const product = mongoose.model('Product', productSchema)

module.exports = product;

