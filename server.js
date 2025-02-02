const express = require('express')
const app = express()
const connectDB = require('./config/database') //'require' goes to a different file to get something -- here we are getting the connectDB function to connect to Mongoose
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes) //using homeRoutes makes it so methods will ONLY be available from this location
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    