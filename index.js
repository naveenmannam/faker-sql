const app = require("./server.js");
const port = process.env.PORT || 5000;
const ip = process.env.IP || "0.0.0.0";

app.listen(port, ip, () => {
  console.log(`Server running on http://${ip}:${port}`);
});
