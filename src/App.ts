import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { volunteerRouter } from './routers/volunteerRouter.js';
dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(cors()); //cors에러 방지
app.use(express.json()); // 바디파서
//app.use(express.urlencoded({ extended: false }));

const DB_URL =
  process.env.MONGODB_URL ||
  'MongoDB 서버 주소가 설정되지 않았거나, env 파일도 필요합니다.\n';

mongoose.connect(DB_URL, { dbName: 'maum' });

const db = mongoose.connection;

db.on('connected', () =>
  console.log('정상적으로 MongoDB 서버에 연결되었습니다.  ' + DB_URL)
);
db.on('error', (error) =>
  console.error('\nMongoDB 연결에 실패하였습니다...\n' + DB_URL + '\n' + error)
);

app.use('/api', volunteerRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // 마지막에 붙이는 에러핸들러

export { app };
