const fs =require('fs');
const products=
[
   {
      "_id":"6",
      "name":"Slim Shirt",
      "image":"../image/shirt4.jpg",
      "brand":"Nike",
      "price":70,
      "rating":4.5,
      "numReviews":10,
      "countInStock":6
   },
   {
      "_id":"1",
      "name":"Slim Shirt",
      "image":"../image/shirt.jpg",
      "brand":"Nike",
      "price":60,
      "rating":4.4,
      "numReviews":20,
      "countInStock":7
   },
   {
      "_id":"2",
      "name":"Slim Shirt",
      "image":"../image/shirt2.jpg",
      "brand":"Nike",
      "price":80,
      "rating":4.2,
      "numReviews":30,
      "countInStock":5
   },
   {
      "_id":"3",
      "name":"Slim Shirt",
      "image":"../image/shirt3.jpg",
      "brand":"Nike",
      "price":90,
      "rating":3.5,
      "numReviews":20,
      "countInStock":5
   },
   {
      "_id":"4",
      "name":"Slim Shirt",
      "image":"../image/shirt5.jpg",
      "brand":"Nike",
      "price":60,
      "rating":4.5,
      "numReviews":90,
      "countInStock":10
   }

]
const jsonform=JSON.stringify(products);
fs.writeFile("jsondata.json",jsonform,(err)=>{console.log("done");});
