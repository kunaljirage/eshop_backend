const express = require('express');
const fs = require('fs');
const app = express();
const config=require('./config');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const userRoute=require('./routes/userRouter');


app.use(bodyparser.json());

const PORT=process.env.PORT || 5000;
const mongodbUrl=config.url;

mongoose.connect(mongodbUrl, { useNewUrlParser: true }).catch(error => console.log(error.reason));

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'));
}


app.use("/api/users",userRoute);


app.get("/api/product", function(req, res) {
    fs.readFile("jsondata.json", "utf-8", (err, data) => {
        if (data)
            res.send(data);
        else
            res.status(404).send({ msg: "Product Not Found" });
    });

})



app.get("/api/product/:Id", function(req, res) {
    const productId = req.params.Id;
    fs.readFile("jsondata.json", "utf-8", (err, data) => {
        const data1 = JSON.parse(data);
        if (data1)
            data1.map((product) => {
                if (productId == product._id)
                    res.send(product);
            })

        else
            res.status(404).send({ msg: "Product Not Found" });
    });

})







app.listen(PORT);