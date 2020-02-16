import 'dotenv/config';
import './database/index';
import express from 'express';
import cors from 'cors';
import route from './app/routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.route();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  route() {
    this.server.use(route);
  }
}

export default new App().server;
