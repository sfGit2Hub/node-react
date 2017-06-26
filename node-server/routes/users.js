var express = require('express');
var router = express.Router();
var PC_APP = require('../react/PC_App');
var ReactServer = require('react-dom/server');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(
      'pc/views/index',
      {
          title: 'PC-HelloWorld',
          appHtml: ReactServer.renderToString('<PC_APP/>')
      }
      );
  // res.send(renderFullPage(ReactServer.renderToString('<PC_APP/>')))
});

const renderFullPage = (html) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `
}

module.exports = router;
