const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://arfiya2504:<Reetick01>@cluster0.hk0lzco.mongodb.net/chefshundred?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB =async() =>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true},async(err,result)=> {
       if(err) console.log("---",err)
    else{
        console.log("connected");
       const fetched_data = await mongoose.connection.db.collection("food_items");
       fetched_data.find({}).toArray( function(err, data){
         if(err) console.log(err);
         else  console.log(data);
    })
  }
  
       });
    
        
    
}

module.exports = mongoDB;
