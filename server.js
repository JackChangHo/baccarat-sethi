const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`伺服器運行於 http://localhost:${PORT}`);
});