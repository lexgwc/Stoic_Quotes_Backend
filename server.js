import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import express from 'express'
import userRouter from './routes/userRoutes.js'
import stoicQuotesRouter from './routes/stoicQuotesRoutes.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(morgan('combined'))
app.use(cookieParser());


app.get('/', (req, res) => {
    res.json("this is the 'index' index route, your server is running!")
})

app.use('/users', userRouter);

app.use('/stoicQuotes', stoicQuotesRouter)


app.listen(PORT, () =>{
    console.log(`you are listening on port https://localhost:${PORT}`)
})

