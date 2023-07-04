const express = require('express')
const cors = require('cors')


const PORT = 3000

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.get('/api', (req, res) =>{
    res.send('Hello from dummy backend')
})

app.get('/api/randomize', (req, res) =>{
    var num = Math.floor(Math.random() * 100) 
    res.status(200).json({val: num.toString()})
})

app.listen(PORT, ()=>{
    console.log('server started')
})