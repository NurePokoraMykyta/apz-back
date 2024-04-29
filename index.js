import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true
    })
})

app.post('/auth/login', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,
        companyName: req.body.companyName,
    }, 'pokoraMykyta')
})

app.listen(4444, (err) => {
    if(err)return console.log(err);
    console.log("SERVER OK");
})