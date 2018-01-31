const express = require("express");
const bodyParser = require("body-parser");

const server = express();
server.set("view engine", "pug");

server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.render("calci");
});

const operatorEvaluators = {
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right
};

function evaluate(operator, leftOperand, rightOperand) {
  /*switch (operator) {
  case "+": return leftOperand + rightOperand;
  case "-": return leftOperand - rightOperand;
  case "*": return leftOperand * rightOperand;
  case "/": return leftOperand / rightOperand;
  }*/

  return operatorEvaluators[operator](leftOperand, rightOperand);
};

server.post("/", (req, res) => {
  const result = evaluate(
    req.body.op,
    parseInt(req.body.opl),
    parseInt(req.body.opr)
  );

  res.render("calci", {
    result
  });
});

server.listen(8080);
