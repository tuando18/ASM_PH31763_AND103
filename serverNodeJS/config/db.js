const mongoose = require('mongoose');

const local = "mongodb+srv://giapdqph34273:G4QDVOvdVebuHJEP@testmongodb.3f1oxwh.mongodb.net/giapdoquang";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };