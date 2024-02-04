import express from 'express';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import apiAccountRouter from './routes/api/apiAccountRouter';
import authRouter from './routes/render/authRouter';
import tweetsRouter from './routes/render/tweetsRouter';
import apiTweetsRouter from './routes/api/apiTweetsRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/account', apiAccountRouter);
app.use('/api/tweets', apiTweetsRouter);
app.use('/auth', authRouter);
app.use('/tweets', tweetsRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
