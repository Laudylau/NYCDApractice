const express = require('express');
const path = require('path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")

app.get("/", (req, res) => {
  let articles = [
    {
      id: 1,
      title: "Article one",
      body: "This is article one!"
    },
    {
      id: 2,
      title: "Article two",
      body: "This is article two!"
    }
  ];
  res.render("index", {
    title: "Articlessssss",
    articles: articles
  });
});

app.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Add article"
  });
});


app.listen(8080, ()=> {
  console.log("I now listen to port 8080!")
})
