const express = require("express")
const tasksRouter = require("./routes/tasks")
const session = require("express-session")
const dotenv= require("dotenv")
dotenv.config();
const app = express()
const port = process.env.PORT || 3002

app.use(express.static('./public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    httpOnly: true
  }
}))

app.get("/liste.html", (req, res) => {
  
})

app.use(express.json())
app.use((req, res, next) => {
  if (!req.session.count) req.session.count = 1;
  else req.session.count++;
  console.log(req.session);
  next();
});

app.use("/tasks", tasksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404 not found" });
})

app.listen(port, () => {
  console.log("server started at localhost: " + port);
})
