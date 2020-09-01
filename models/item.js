const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    items: [{
        name: {
            type: String,
            default: ""
        },
        imageUrl: {
            type: String,
            default: ""
        },
        isObtained: {
            type: Boolean,
            default: false,
        }
    }]
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;