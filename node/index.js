const http = require("http");
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.getHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end();
});

app.listen(5000, () => console.log(`Server running on 5000`));
