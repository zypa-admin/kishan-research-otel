import express, { type Request, type Response } from 'express';
import { helloWorldRouter } from './routes/helloWorld.js';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use(helloWorldRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
