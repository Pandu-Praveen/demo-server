import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
  res.send({ message: "message" });
});
app.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  // res.json({ message: "message" });
  res.sendFile(path.join(process.cwd(), "public", "about.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "about.html"));
});
app.listen(PORT, () => {
  console.log(`Server is Running at the PORT ${PORT}`);
});
