const express = require("express");
const cors = require("cors");
const { createBusinessCard, updateBusinessCard } = require("./zod");
const { businessCard } = require("./db");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.listen(3000);

app.get("/businessCard", async function (req, res) {
  const businessCards = await businessCard.find({});
  res.json({ businessCards });
});

app.post("/businessCard/create", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createBusinessCard.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }
  await businessCard.create({
    title: createPayload.title,
    description: createPayload.description,
    interest: createPayload.interest,
    linkedIn: createPayload.linkedIn,
    twitter: createPayload.twitter,
    other: createPayload.other,
  });
  res.status(200).json({ msg: "Business Card Created" });
});

app.put("/businessCard/update", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = updateBusinessCard.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }
  await businessCard.updateOne(
    { _id: createPayload.id },
    {
      title: createPayload.title,
      description: createPayload.description,
      interest: createPayload.interest,
      linkedIn: createPayload.linkedIn,
      twitter: createPayload.twitter,
      other: createPayload.other,
    }
  );
  res.status(200).json({ msg: "Business Card Updated" });
});

app.delete("/businessCard/delete", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = updateBusinessCard.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }
  await businessCard.deleteOne({ _id: createPayload.id });
  res.status(200).json({ msg: "Business Card Deleted" });
});
