const mongoose=require ('mongoose')


const data = new mongoose.Schema({
    Flavours_of_Ice_cream: {
        type: String,
        required: true
      },
      Origin: {
        type: String,
        required: true
      },
        Combinations:{
        type:String,
        required:true
      }
});
const dataSet = mongoose.model('dataSet',data);
module.exports=dataSet;