

// // const express = require('express');
// // const app = express();
// // const mongoose = require("mongoose");
// // const connectDB = require('./db');
// // const PORT = process.env.PORT || 3000;

// // // Define connectDB function
// // ConnectDB();
// // const ConnectDB = async ()=> {
// //     require('dotenv').config()
// //     try {
// //         await mongoose.connect(process.env.DATABASE_URI, {});
// //     } catch (err) {
// //         console.error(err);
// //     }
// // }

// // // // Connect to MongoDB
// // // connectionDB();

// // mongoose.createConnection("open", () => {
// //     console.log('Connected to MongoDB');
// // });

// // // Define the ping route
// // app.get('/ping', (req, res) => {
// //     res.send("pong");
// // });

// // if (require.main === module) {
// //     app.listen(PORT, () => {
// //         console.log(`🚀 server running on PORT: ${PORT}`);
// //     });
// // }

// // module.exports = app;

// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// const ConnectDB = require('./db'); // Corrected the case of function name to ConnectDB
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// ConnectDB(); // Corrected the case of function name to ConnectDB

// mongoose.createConnection("open", () => {
//     console.log('Connected to MongoDB');
// });

// // Define the ping route
// app.get('/ping', (req, res) => {
//     res.send("pong");
// });

// if (require.main === module) {
//     app.listen(PORT, () => {
//         console.log(`🚀 server running on PORT: ${PORT}`);
//     });
// }

// module.exports = app;

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
    }catch(err){
        console.error(err)
    }
}
connectDb()
app.get('/ping',(req,res)=>{
    res.send('pong')
})
app.get('/',(req,res)=>{
    const dbStatus = mongoose.connection.readyState;
  let message;
  switch (dbStatus) {
    case 0:
      message = 'Disconnected';
      break;
    case 1:
      message = 'Connected';
      break;
    case 2:
      message = 'Connecting';
      break;
    case 3:
      message = 'Disconnecting';
      break;
    default:
      message = 'Unknown';
  }
  res.send(`Database connection status: ${message}`)
})
app.listen(3000,()=>{
    console.log('server running')
})