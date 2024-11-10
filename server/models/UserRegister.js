const mongoose = require("mongoose");

const UserRegisterSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
});

const UserRegisterModel = mongoose.model('Users', UserRegisterSchema);

module.exports = { UserRegisterModel };

