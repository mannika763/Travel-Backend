const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({

Email: {
    type: String,
    required: [true, "Email is Required"],
},
Password: {
    type: String,
     required: true,
},


}, {timestamps: true})

const traveladmindatas = mongoose.model('traveladmindatas',dataSchema );
module.exports= traveladmindatas;