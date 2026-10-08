import { Router, type Request, type Response } from 'express';

export const helloWorldRouter = Router();

helloWorldRouter.get('/hello-world', (_req: Request, res: Response) => {
  res.send('Hello World!');
});
