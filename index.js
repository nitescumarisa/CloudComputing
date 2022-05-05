const express = require("express");
const messagesRouter = require("./routers/messagesRouter");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.use("/messages", messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
