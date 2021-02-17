require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const cors=require("cors");
const app = express();
const PORT=process.env.PORT||5000;
// middleware
app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
// app.set('view engine', 'ejs');

// database connection
const dbURI =process.env.MONGO_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT, ()=>console.log(`server started at 5000`)))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.use(routes);