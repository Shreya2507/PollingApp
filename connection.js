const mongoose = require('mongoose');

const url = "mongodb+srv://admin:admin@cluster0.eq1ebto.mongodb.net/pollingDatabase?retryWrites=true&w=majority";

const connection = ()=> {
    mongoose.connect(url).then(()=>{
        console.log("Connected to database")
    }).catch((error)=>{
        console.log("Database not connected", error);
    });
}

module.exports = connection;