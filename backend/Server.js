const express=require('express');
const cors=require('cors');
const bodyparse=require("body-parser");
const app=express();
app.use(cors());
app.use(bodyparse.json());
const tourRoutes=require('./Routes/tourRoutes');
const authRoutes=require('./Routes/authRoutes');
const adminRoutes=require('./Routes/adminRoutes');
app.get("/api", (req, res) => {
	res.send("This is the homepage");
});
app.use('/lon',tourRoutes);
app.use('/',authRoutes);
app.use('/admin',adminRoutes);
  app.listen(5100, () => {
    console.log('Server is running at http://localhost:5100');
  });