const express = require("express");
const app = express();
const https = require("https");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  https
    .get("https://jsonplaceholder.typicode.com/users", (response) => {
      let data = "";

      response.on("data", (user) => {
        data += user;
      });

      response.on("end", () => {
        const users = JSON.parse(data);
        res.send(users);
      });
    })
    .on("error", (error) => {
      res.status(500).send(error);
    });
});

app.listen(8000, () => {
  console.log(`server is running`);
});
