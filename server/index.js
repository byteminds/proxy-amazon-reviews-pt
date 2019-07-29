const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//Handle bad req return empty data
app.use(express.static(path.join(__dirname, "../client")));
app.use("/:productId", express.static(path.join(__dirname, "../client"))); //brings in index.html
//review component
app.get("/reviews/api/:id", (req, res) => {
  console.log("REVIEWS ROUTE");
  const url = `http://localhost:3001/reviews/api/${req.params.id}`;
  axios.get(url).then((resdt)=>{ res.send(resdt.data);}).catch(err => {console.log(err)});
});

app.get("/descriptions/:id",(req,res)=>{
  const url = `http://localhost:3003/descriptions/${req.params.id}`;
  axios.get(url).then((resdt)=>{ res.send(resdt.data);}).catch(err => {console.log(err)});
})

app.get("/pricingAPI/:id",(req,res)=>{
  const url = `http://localhost:3004/pricingAPI/${req.params.id}`;
  axios.get(url).then((resdt)=>{ res.send(resdt.data);}).catch(err => {console.log(err)});
})


// async function asyncGetDescriptions(req, res) {
//   let data;
//   // fetch data from a url endpoint
//   axios.get(`http://localhost:3003/descriptions/api/${req.params.id}`);
//   return data;
// }
// app.use("/descriptions/:id", (req, res) => {
//   console.log("DESCRIPTION ROUTE");
//   asyncGetDescriptions(req, res);
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Amazon Item Page is listening on ${PORT}`);
});
