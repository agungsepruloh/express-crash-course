const express = require("express");
const path = require("path");
const logger = require('./middleware/logger');
const members = require("./Members");

const app = express();

// Server port
const PORT = process.env.PORT || 5000; // Using port that server has been created (deployment) or run on port 5000

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Init middleware
app.use(logger);

// Create simple REST API
// Get all members
app.get("/api/members", (req, res) => res.json(members));

// Get single member
app.get('/api/members/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
      msg: `No member with the id of ${req.params.id}`
    });
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));