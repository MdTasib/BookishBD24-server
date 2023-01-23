const  mongoose = require("mongoose");

const reviewSchema= mongoose.Schema(
    {
        rating: {
            type: Number,
            require: true,
        },
        review: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        photoURL: {
            type: String,
            require: true,
        },
        displayName: {
            type: String,
            require: true,
        }
    }
)

const review =mongoose.model("review",reviewSchema);
module.exports= review;