const express = require("express");
const app =express();
const router=require("./routes/router");
const cors=require("cors");
const cookiParser = require("cookie-parser")
const PORT=8009;
require("./db/conn");

/*app.get("/",(req,res)=>{
    res.status(201).json("server created")
});*/

app.use(express.json());
app.use(cors());
app.use(cookiParser());
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server started at port no: ${PORT}`);
})