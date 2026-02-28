import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './modules/Auth/auth.route';
import { auth } from './lib/auth';
import { toNodeHandler } from 'better-auth/node';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use('/api/auth', AuthRoutes);
app.all("/api/auth/*splat", toNodeHandler(auth));
// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Apollo Gears World!');
});

export default app;
