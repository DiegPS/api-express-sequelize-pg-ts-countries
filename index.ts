import "dotenv/config"
const { PORT } = process.env
import { app } from "./src/app"
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})