const express = require("express");
const app = express();

require("dotenv").config({ quiet: true });

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
