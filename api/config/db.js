import mongoose from 'mongoose';

// mongoDB Connection
const mongoDBConnect = async () => {
    try{
        
        const connectDBLink = process.env.MONGO_CONNECTION_STR || 'mongodb+srv://crud:crud9900@cluster0.knhes.mongodb.net/CRUD';
        const connection = await mongoose.connect(connectDBLink);
        console.log('Connected!'.bgWhite.black);

    }catch(err){
        console.log(err);
    }
}

export default mongoDBConnect;
