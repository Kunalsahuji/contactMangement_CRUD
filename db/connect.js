const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0/contacts-management-ii")
    .then(() => {
        console.log("DB Connected")
    }).catch((err) => {
        console.log(err)
    });