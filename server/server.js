import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.babel';
import webpackMiddleware from 'webpack-dev-middleware';
import HMR from 'webpack-hot-middleware';
const path = require('path');

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(HMR(compiler));

//GETリクエストでルートにアクセスが会った時の動作
app.get('/', (req, res)=>{
  const index = fs.readFileSync('./public/index.html', 'utf-8');
  res.send(index);
});

app.get('/*', function(req, res) {
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
