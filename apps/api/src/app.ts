import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  static as static_,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { AuthRouter } from './routers/auth.router';
import { OrganizerRouter } from './routers/organizer.router';
import { EventRouter } from './routers/event.router';
import { join } from 'path';
import { UserRouter } from './routers/user.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
      }),
    );
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      );
      if (req.method == 'OPTIONS') {
        res.header(
          'Access-Control-Allow-Methods',
          'PUT, POST, PATCH, DELETE, GET',
        );
        return res.status(200).json({});
      }

      next();
    });
    this.app.use(express.static('public'));
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use('/api/assets', static_(join(__dirname, '../public')));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const organizerRouter = new OrganizerRouter();
    const eventRouter = new EventRouter();
    const userRouter = new UserRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use('/api/user', userRouter.getRouter());
    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/organizer', organizerRouter.getRouter());
    this.app.use('/api/event', eventRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
