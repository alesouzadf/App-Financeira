import cors from 'cors'
import express from 'express'

const porta = process.env.API_PORT ?? 3003
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200,
    })
)

app.listen(porta, () => {
    console.log(`🔥 Server is running on port ${porta}`)
})

export default app