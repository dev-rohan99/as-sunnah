import mongoose from 'mongoose';

// mongoDB Connection
const mongoDBConnect = async () => {
    mongoose.set('strictQuery', true);
    try{
        
        const connectDBLink = process.env.MONGO_CONNECTION_STR || 'mongodb://localhost/facebook';
        await mongoose.connect(connectDBLink);
        console.log('Connected!'.bgWhite.black);

    }catch(err){
        console.log(err);
    }
}

export default mongoDBConnect;
