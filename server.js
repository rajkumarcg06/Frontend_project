const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const studentData = [
  {
    _id: 1,
    registerId: "1ST19CS221",
    studentName: "Riya K",
    FatherName: "Krishna Gowda",
    collegeName: "Oxford University",
    id: "bfb8"
  },
  {
    _id: 2,
    registerId: "1ST19CV103",
    studentName: "Madhuri M",
    FatherName: "Ajay Bhat",
    collegeName: "Oxford University",
    id: "db33"
  },
  {
    _id: 3,
    registerId: "1ST19EC406",
    studentName: "Sam Smith",
    FatherName: "Robert Mark",
    collegeName: "Oxford University",
    id: "7ac8"
  }
];

app.get("/resultLoginPage", (req, res) => {
  res.json(studentData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
