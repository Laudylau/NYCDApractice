const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const server = express();

const g_users = [
    {
      email: "lalala@gmail.com",
      password: "foo",
      passwordHash: "$2a$10$4yLkzU8AnHP/2drX2Ds4pOPwwYuExzNAwFYg5pfyqyl94KDJd6w7."
    }
];

server.set("view engine", "pug");
server.use(bodyParser.urlencoded({extended:true}));

server.get("/", (req, res) => {
    res.render("login");
});

server.post("/profile", (req, res) => {

        let emailParsed = req.body.email;
        let passwordParsed = req.body.password;


        for (const user of g_users) {
          if (user.email === emailParsed) {
            break;
          }
        }

        // if (foundUser === null) {
        //   res.render("register");
        // }
        let foundUser = user;
        bcrypt.compare(foundUser.passwordHash, passwordParsed, (err, result) => {

          res
            .status(200).end(`Joepie, you are logged in!!`);
        });
});






server.listen(8080, ()=> console.log("I listen t port 8080"));
