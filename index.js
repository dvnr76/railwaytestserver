const express= require('express')

const app= express()

const PORT=process.env.PORT || 8888

app.get("/", (req,res)=>{

    res.send("From Server")

})

app.listen(PORT)