const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkSchema = new Schema({
        name: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        },
        requiredItems: {
            type: Array,
            default: []
        },
        secondaryItems: {
            type: Array,
            default: []
        },
        ternaryItems: {
            type: Array,
            default: []
        },
        isAccessible: {
            type: Boolean,
            default: false
        },
        isChecked: {
            type: Boolean,
            default: false,
        }
});

const Check = mongoose.model("Check", checkSchema);
module.exports = Check;