const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.config");
const open = require("opn");

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

const port = 3000;
app.listen(port, () => {
  open(`http://localhost:${port}`);
});
