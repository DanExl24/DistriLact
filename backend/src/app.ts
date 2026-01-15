import express from "express";
import cors from 'cors'
import testRoutes from './routes/test.routes'
import userRoter from './routes/user.routes'
import authRouter from './routes/auth.routes'

const app = express()

app.use(cors())

app.use(express.json())

// Rutas
app.use('/api',testRoutes)
app.use('/api',userRoter)
app.use('/api',authRouter)

export default app