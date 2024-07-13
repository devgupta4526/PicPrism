const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique : true,
            require: true
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        password : {
            type : String,
            require: true
        },
        accountType : {
            type : String,
            default : "buyer",
        },
        uploads : [
            {
              type : mongoose.Schema.Types.ObjectId,
              ref : "Post",
            },
        ],
        purchased : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Post"
            }
        ],
        favourites : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Post",
            },
        ],
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;