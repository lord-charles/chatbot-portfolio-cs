const app = require("express")();
const morgan = require("morgan");
const bot = require("./route/bot");
const cors = require("cors");
const Parser = require("body-parser");

//using  middlewares
app.use(cors());
app.options("*", cors());
app.use(Parser.json());
app.use(morgan("tiny"));
app.use(`/bot`, bot);

app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

//port listening
app.listen(8000, () => {
  console.log("listening..");
});
