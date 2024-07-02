// importttttt
const app = require('./app');

const dotenv = require('dotenv').config()

const connectDatabase = require('./config/database')

//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})
//Config
// dotenv.config({path:'backend/config/config.env'});
const port = process.env.PORT || 4000

//connecting to database
connectDatabase()

const server = app.listen(port,() =>{

    console.log(`Server is working on http://localhost:${port}`)
})
//  console.log(aagfdg)
//unhandled Promise Rejection
process.on("unhandledRejection",err =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
//listen    ,  use  ,     post  ,  get 