const mongoose = require('mongoose');

const userSchema = {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }

}

const UserModel = mongoose.model("user", userSchema);

module.exports=UserModel;