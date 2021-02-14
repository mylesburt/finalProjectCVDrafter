const express = require("express");
const app = express();

//IMport Routes
const authRoute = require("./routes/auth");

///ROute Middlewares
app.use("/api/user", authRoute);

app.listen(7000, () => console.log("🌎  ==> API Server now listening"));
