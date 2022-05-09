import { Request, Response } from "express"
function get(_req: Request, res: Response) {
  res.send("hello")
}
export { get }