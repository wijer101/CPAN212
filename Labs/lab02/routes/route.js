const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the router")
})

router.get("/name", (req, res)=>{
    res.send("Arman R.")
})

router.get("/greeting", (req, res)=>{
    res.send("Hello from Arman, my student number is N01640841")
})

router.get("/add/:x/:y", (req, res)=>{

    res.send((JSON.stringify(parseFloat(req.params.x) + parseFloat(req.params.y))))
})

router.get("/calculate/:x/:y/:operator", (req, res)=>{
    const x = parseFloat(req.params.x);
    const y = parseFloat(req.params.y);
    const operator = req.params.operator;

    let result;
    
    if(operator === "+"){
        result = x + y
    }
    else if(operator === "-"){
        result = x - y
    }
    else if(operator === "*"){
        result = x * y
    }
    else if(operator === "/"){
        result = x / y
    }
    else if(operator === "**"){
        result = x ** y
    }
    else {
        result = "Invalid operator";
    }

    res.send(JSON.stringify(result));
    
})

module.exports = router 