require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
const productRouter = require('./routes/productsRoutes')
const userRouter = require('./routes/userRoute')
const { connectDatabase } = require('./config/database')
// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const { log } = console

// routes
app.use('/api/user', userRouter)
app.use('/api/products', productRouter)



// database and server connection


connectDatabase((error)=>{
    if(error){
        log(`Error connecting to database: ${error.message}`)
        return
    }
    app.listen(port, ()=>{
        log(`server and database connected at port ${port}`)
    })
})

