const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(authRoutes);
app.use(protectedRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
