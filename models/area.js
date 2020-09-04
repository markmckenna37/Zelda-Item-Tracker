const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const areaSchema = new Schema({
        name: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        top: {
            type: String,
            default: ""
        },
        left: {
            type: String,
            default: ""
        },
        requiredItems: {
            type: Array,
            default: []
        },
        alternateItems: {
            type: Array,
            default: []
        },
        isAccessible: {
            type: Boolean,
            default: false
        }
});

const Area = mongoose.model("Area", areaSchema);
module.exports = Area;