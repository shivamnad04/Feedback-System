const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.5lam1mo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const FeedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

app.post("/api/feedback", async (req, res) => {
  const { name, message } = req.body;
  const feedback = new Feedback({ name, message });
  await feedback.save();
  res.status(201).json(feedback);
});

app.get("/api/feedback", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ date: -1 });
  res.json(feedbacks);
});

app.delete("/api/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

app.listen(5000, () => console.log("Server started on http://localhost:5000"));
