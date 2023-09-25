const mongoose= require("mongoose");

const DB ="mongodb+srv://sumedhajoshi:Meera06$@cluster0.luzokrg.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=> console.log("Database connected")).catch((errr)=>{
    console.log(errr);
})