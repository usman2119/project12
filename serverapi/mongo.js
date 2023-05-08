const mongoose=require("mongoose")
const url="mongodb+srv://net-ninja:1234ninja@cluster0.ybtiw9f.mongodb.net/test"
mongoose.connect(url)
.then(()=>{
    console.log("connected to db")
}).catch(()=>[
    console.log("failed to connect")
])
const newSchema= new mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    username:{
        required:true,
        type:String
    }

})

const  collection=mongoose.model("collection",newSchema)

module.exports=collection