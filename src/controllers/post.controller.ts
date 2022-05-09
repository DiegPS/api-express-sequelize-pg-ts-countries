import { Request, Response } from "express"
function post(req: Request, res: Response) {
  const content = req.body
  res.send(content)
}
export { post }