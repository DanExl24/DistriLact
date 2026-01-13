import express from "express";
import cors from 'cors'
import testRoutes from './routes/test.routes'
import userRoter from './routes/user.routes'

const app = express()

app.use(cors())

app.use(express.json())

// Rutas
app.use('/api',testRoutes)
app.use('/api',userRoter)

export default app