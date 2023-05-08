const express = require('express');
const app = express();
const cors=require ("cors")
const axios=require("axios")
const collection= require("./mongo")
const { auth } = require('express-oauth2-jwt-bearer');
const jwt=require ("express-jwt")
const jwks=require ("jwks-rsa")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
const port = process.env.PORT || 7000;

 const jwtCheck = auth({
   audience: 'my new Identifier',
   issuerBaseURL: 'https://usmantahir2119.eu.auth0.com/',
   tokenSigningAlg: 'RS256'
 })
  //enforce on all endpoints
 app.use(jwtCheck);

app.get('/', function (req, res) {
    
});
app.get('/api', async(req, res)=> {
  try {
  const accesstoken= req.headers.authorization.split('')[1]
  const userinfo= await axios.get("https://usmantahir2119.eu.auth0.com/userinfo",{
    headers:{
      authorization:`Bearer ${accesstoken}`
    }
  })
  const response= userinfo.user
  console.log(response)
    res.send(response);
        
  } catch (error) {
  res.send(error.message) 
  }
});

app.use((next,res,req)=>{
  const error= new Error("Not Found")
  error.status=404
  next(error)
})

app.use((error,req,res,next)=>{
  const status= error.status || 500
  const message= error.message || "internal server error"
  res.status(status).send(message)
})

app.listen(port);

console.log('Running on port ', port);