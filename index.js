const express = require("express");
const path = require("path");
const logger = require('./middleware/logger');

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

// Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));