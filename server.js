import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import express from 'express'
import router from './routes/stoicQuotesRoutes.js'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(morgan('combined'))


app.use('/stoicQuotes', router)


app.listen(PORT, () =>{
    console.log(`you are listening on port localhost:${PORT}`)
})

