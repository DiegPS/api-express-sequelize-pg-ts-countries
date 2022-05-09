import { Router } from "express"
import { post } from "../controllers/post.controller"
const router = Router()
router.post("/", post)
export { router }