const express = require("express");
const cors = require("cors");
const { createBusinessCard, updateBusinessCard } = require("./zod");
const { businessCard } = require("./db");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.listen(3000);

app.get("/businessCard", async function (req, res) {
  try {
    const businessCards = await businessCard.find({});
    res.json({ businessCards });
  } catch (error) {
    console.error("Error getting business card:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
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
  try {
    const result = await businessCard.create({
      title: createPayload.title,
      description: createPayload.description,
      interest: createPayload.interest,
      linkedIn: createPayload.linkedIn,
      twitter: createPayload.twitter,
      other: createPayload.other,
    });
    if (result._id.toString()) {
      res.status(200).json({ msg: "Business Card Created" });
    } else {
      res.status(404).json({ msg: "Business Card Not Created" });
    }
  } catch (error) {
    console.error("Error creating business card:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
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
  try {
    const result = await businessCard.updateOne(
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
    console.log(result);
    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Business Card Updated" });
    } else if (result.modifiedCount === 0 && result.matchedCount === 1) {
      res.status(200).json({ msg: "Data is Same" });
    } else {
      res.status(404).json({ msg: "Business Card Not Found" });
    }
  } catch (error) {
    console.error("Error updating business card:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
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
  try {
    const result = await businessCard.deleteOne({ _id: createPayload.id });

    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Business Card Deleted" });
    } else {
      res.status(404).json({ msg: "Business Card Not Found" });
    }
  } catch (error) {
    console.error("Error deleting business card:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});
