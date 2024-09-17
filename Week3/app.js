const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path")

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    res.sendFile(path.join(__dirname, "pages", "homepage.html"))
})
app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "pages", "about.html"))
})
app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "pages", "contact.html"))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "pages", "login.html"))
})
app.post("/login", (req, res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    res.send("POST LOGIN RECEIVED")
})

// params example 
 /* 
  https://
  www.ebay.ca -> localhost: 8000
  /itm -> /itm
  /326252022409 -> /:productID
  
  */
 
 
  app.get("/itm/:productID", (req, res)=>{
    console.log(req.params)
    console.log(req.query)
 
 
    res.send("This is your product ID: "+ req.params.productID)
  })

  // query: https://www.youtube.com/watch?v=HXJx8j7JpKY
 
 
app.get("/watch", (req, res)=>{
    console.log(req.params)
    console.log(req.query)
 
 
    res.send("This is your query: ")
})
  

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})