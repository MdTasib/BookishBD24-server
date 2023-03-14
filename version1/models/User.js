const mongoose = require("mongoose");

const userSchema =mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLenght: [2, "Name must be al last 3 characters"],
		maxLenght: [100, "Name is too large"],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    address: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    phone: {
        type : Number,
        required: true,
    }
})

const user = mongoose.modal("user",userSchema)
module.exports=user;