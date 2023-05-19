const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
require("dotenv").config();
const authRoute = require('./routes/auth');
const hotelRoute = require('./routes/hotels');
const userRoute = require('./routes/users');
const roomRoute = require('./routes/rooms')
const cookieParser = require("cookie-parser");

const eventRoute = require('./routes/EventRoute');
const wishListRoute = require('./routes/WishListRoute');
const reviewRoute = require('./routes/ReviewRoute')


const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser())
app.use(cors())


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`App listen on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.use('/api/auth/',authRoute)
app.use('/api/users/',userRoute)
app.use('/api/hotel/',hotelRoute)
app.use('/api/rooms/',roomRoute)
app.use('/api/event', eventRoute);
app.use('/api/wishlist', wishListRoute);
app.use('/api/review', reviewRoute);

app.use((err,req,res,next)=>{
  const errStatus = err.status || 500
  const errMessage = err.message || 'Something went wrong'
  return res.status(errStatus).json(errMessage)
})


