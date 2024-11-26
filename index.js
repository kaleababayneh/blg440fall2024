const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const indexRouteController = require("./routes/indexRouteController");
const signupRouteController = require("./routes/signupRouteController");
const signinRouterController = require("./routes/signinRouteController");
const companyRoutes = require("./routes/companyRoutes");

//app.use(express.static(path.join(__dirname, "/front")));
app.use(
  "/blg440fall2024/css",
  express.static(path.join(__dirname, "front/css"))
);
// Serve CSS from the views directory
app.use(express.static(path.join(__dirname, "/front/css")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", indexRouteController);
app.use("/signup", signupRouteController);
app.use("/signin", signinRouterController);
app.use("/company", companyRoutes);

app.listen(5004, () => {
  console.log("Server is running on port 3000");
});

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.q7c7d.mongodb.net/test6?retryWrites=true&w=majority&appName=Cluster",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
}

// Monitor the connection
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

// Initialize connection
connectDB();
