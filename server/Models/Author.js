const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    Name:String,
    Birthyear:Number,
    Genre:String,
    isDead:Boolean,
    isMale:Boolean,
    ImageURL:String
});

const Author = mongoose.model('Author', authorSchema);

module.exports=Author