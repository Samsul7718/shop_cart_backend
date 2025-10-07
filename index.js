import express from "express"
import cors from "cors"
import products from "./product.js"

const app=express()
app.use(cors());
app.use(express.json());

const port =process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Backend Server is ready")
})

app.get("/api/product",(req,res)=>{
    res.send(products)
})

app.post("/api/order", (req, res) => {
  console.log("Order endpoint hit");
  const { products,total } = req.body;
  console.log("Received Order:", products);
  console.log("Total Payble Amount:", total);
  res.json({ message: "Order received successfully!",products,total});
});

app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}`)
})