const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) =>{
  console.log(req.url, req.method);

  console.log("num");
  const num = _.random(0, 20);
  console.log(num);

  //set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;

      break;    
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
      case '/about-hola':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        break;      
    default:
      path += '404.html';
      res.statusCode = 404;
      break;      
  }

  // send a file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  })
  
});

server.listen(3000, '192.168.245.151', () => {
  console.log('listening on 3000');
});