const express = require("express");
const app = express();

app.use(express.json());
app.listen(3000);

app.get("/businessCard", function (req, res) {});
app.post("/businessCard/create", function (req, res) {});
app.put("/businessCard/update", function (req, res) {});
app.delete("/businessCard/delete", function (req, res) {});
