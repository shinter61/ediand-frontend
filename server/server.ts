import express from 'express';
import * as fs from 'fs';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';
import HMR from 'webpack-hot-middleware';
import path from 'path';

const app: express.Express = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(HMR(compiler));

//GETリクエストでルートにアクセスが会った時の動作
app.get('/', (_req: express.Request, res: express.Response)=>{
  const index = fs.readFileSync('./public/index.html', 'utf-8');
  res.send(index);
});

app.get('/*', function(_req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//3001番ポートを使ってサーバーを立ち上げ
app.listen(3001, ()=>{
  console.log('app listening on 3001');
});
