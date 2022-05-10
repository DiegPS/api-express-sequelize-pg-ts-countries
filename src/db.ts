import { Sequelize } from "sequelize"
const { DB_NAME } = process.env
const sequelize = new Sequelize(`${DB_NAME}`)
export { sequelize }