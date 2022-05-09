import { Router } from "express"
import { get } from "../controllers/get.controller"
const router = Router()

router.get("/", get)

export { router }