import "dotenv/config"
const { PORT } = process.env
import { app } from "./src/app"
import { sequelize } from "./src/db"
sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running on Port ${PORT}`)
    })
  })