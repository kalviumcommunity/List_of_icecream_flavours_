const mongoose = require('mongoose')
require('dotenv').config()


const connectDb = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://muhammadthalha:MT24sep2005@cluster0.bnvtypr.mongodb.net/ICE-CREAM?retryWrites=true&w=majority&appName=Cluster0`);
    }catch(err){
        console.error("error connecting",err.message)
    }
}


const checkconnected = () => {
    const dbStatus = mongoose.connection.readyState===1
}
    

module.exports={
    connectDb,
    checkconnected
}