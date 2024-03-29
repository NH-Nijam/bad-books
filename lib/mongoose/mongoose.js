import mongoose from "mongoose";

let isConnected =false;
 
export const connectToDB = async () => {
    mongoose.set('strickQuery', true);

    if (isConnected) {
        console.log('mongodb is already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:'bad-book',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('mongodb is connected');
    }
    catch(error){
        console.log('error');
    }
}