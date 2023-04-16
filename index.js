
const cors = require('cors')
const express = require('express')

const ds = require('./services/dataServices')

const app = express()

app.use(cors({ origin: 'http://localhost:4200' }))

app.use(express.json())

app.post("register",(req,res)=>{
 ds.register(req.body.uname,req.body.number,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })
})















app.listen(3001, () => {
    console.log("Server started at port 3001");
})