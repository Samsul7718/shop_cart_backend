import express from "express"
const Razorpay = require("razorpay");
require("dotenv").config();
const path = require("path");
const {validateWebhookSignature} = require("razorpay/dist/src/utils/razorpay-utils");
import cors from "cors"
import products from "./product.js"

const app=express()

app.set("view engine","ejs")
app.use(cors(
    {
  origin: [
    "https://shop-cart-frontend.vercel.app",
      "http://localhost:5173",
       "http://localhost:5174"  
  ], 
  methods: ["GET","POST"],
  credentials: true
}
));
app.use(express.json());

const port =process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Backend Server is ready")
})

app.get("/api/product",(req,res)=>{
    res.send(products)
})

app.post("/api/order", (req, res) => {
  const rozorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  console.log("Order endpoint hit");
  const { products,total } = req.body;
  console.log("Received Order:", products);
  console.log("Total Payble Amount:", total);
  res.json({ message: "Order received successfully!",products,total});
});

app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}`)
})
// export default app;