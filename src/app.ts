import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './modules/Auth/auth.route';
import { auth } from './lib/auth';
import { fromNodeHeaders, toNodeHandler } from 'better-auth/node';

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], //
    credentials: true, 
  }),
);
app.use('/api/auth', AuthRoutes);
app.all("/api/auth/*splat", toNodeHandler(auth));
// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Medistore!');
});


app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

export default app;
