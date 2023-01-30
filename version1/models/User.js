const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
    {
        userName: {
			type: String,
			required: true
		},
        email:{
            type: String,
            required:true,
            trim: true
        },
        imageURL: {
			type: String,
			required: true,
		},
        address:{
            type: String,
        },
        phone:{
            type: String,
        }
})

const user = mongoose.model("user",userSchema);

module.exports = user;