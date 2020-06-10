const mongoose = require('mongoose');

const connnectDB = async () => {

    try{
        const conn =  await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology : true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`.blue.underline.bold);
    }
    catch{
        console.log(`Error : ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connnectDB;