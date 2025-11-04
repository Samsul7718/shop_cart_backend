// import express from "express"
// import cors from "cors"
// import serverless from "serverless-http";
// import products from "../product.js"

// const app=express()
// app.use(cors({ origin: "*" }));
// app.use(cors(
//     {
//   origin: [
//     "https://shop-cart-frontend.vercel.app",
//       "http://localhost:5173",
//        "http://localhost:5174"  

//   ], 
//   methods: ["GET","POST"],
//   credentials: true
// }
// ));

// app.use(cors({
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like Postman)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("CORS blocked: " + origin));
//     }
//   },
//   methods: ["GET", "POST"],
//   credentials: true
// }));
// app.use(express.json());

// const port =process.env.PORT || 3000

// app.get("/",(req,res)=>{
//     res.send("Backend Server is ready")
// })

// app.get("/api/product",(req,res)=>{
//     res.send(products)
// })

// app.post("/api/order", async(req, res) => {
//   try {
//     const rozorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });
//     const options =  req.body;
//     const order =await rozorpay.orders.create(options);

//     if(!order){
//       return res.status(500).send("Some error occured");
//     }
//     res.json(order);
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
    
//   }
// });
//   console.log("Order endpoint hit");
//   const { products,total } = req.body;
//   console.log("Received Order:", products);
//   console.log("Total Payble Amount:", total);
//   res.json({ message: "Order received successfully!",products,total});
// });

// app.listen(port,()=>{
//     console.log(`Server run at http://localhost:${port}`)
// })
// export default app;

// if (process.env.NODE_ENV !== "production") {
//   app.listen(3000, () => console.log("Local API running"));
// }
// export const handler = serverless(app);


import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import products from "../product.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    "https://shop-cart-frontend.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Backend Server is ready ✅");
});

app.get("/api/product", (req, res) => {
  res.json(products);
});

app.post("/api/order", (req, res) => {
  try {
    const { products, total } = req.body;
    console.log("Order:", products, "Total:", total);
    res.json({ message: "Order received successfully!", products, total });
  } catch (err) {
    console.log("Order error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOCAL ONLY — DO NOT RUN ON VERCEL
if (process.env.NODE_ENV !== "production") {
  const port = 3000;
  app.listen(port, () => console.log("Local API running at http://localhost:3000"));
}

// export const handler = serverless(app);
export const handler = serverless(app);
export default handler;
