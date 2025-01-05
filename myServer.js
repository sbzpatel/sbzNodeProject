const http = require("http");

const dataControl = (req, resp) => {
    resp.write("Hello Shahbaz, you are a great coder i heard!!!!");
    resp.end();
}

// http.createServer(dataControl).listen(3004);

http.createServer((req, resp) => {
    resp.write("Hello Shahbaz, you are a great coder i heard!!!!");
    resp.end();
}).listen(3004);