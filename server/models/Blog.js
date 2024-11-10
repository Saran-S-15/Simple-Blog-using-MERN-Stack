const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    Title:String,
    Content:String,
    Tag:String
})

const BlogModel =  mongoose.model('Blogs', BlogSchema);

module.exports = { BlogModel };