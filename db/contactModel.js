const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
})   
const Contacts = mongoose.model("contact", contactSchema)
module.exports = Contacts