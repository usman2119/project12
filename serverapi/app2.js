const express=require("express")
const app=express( )
const cors = require("cors")
const collection= require("./mongo")
const jwt= require('express-jwt')
const jwks=require('jwks-rsa')
const axios=require('axios')
const { auth } = require('express-oauth2-jwt-bearer');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
const port=process.env.PORT || 7000;

//   const verifyjwt= jwt({
//     secret: jwks.expressJwtSecret({
//         cache:true,
//         rateLimit:true,
//         jwksRequestsPerMinute: 5,
//         jwksUri:"https://dev-3fu07pxmgisdkibv.us.auth0.com/"
//       }),
//       audience:"my new identifier api",
//       issuer:'https://dev-3fu07pxmgisdkibv.us.auth0.com/',
//       tokenSigningAlg:"RS256",
//   })
//  app.use(verifyjwt)


  const jwtCheck = auth({
    
       audience: 'my new identifier api',
       issuerBaseURL: 'https://dev-3fu07pxmgisdkibv.us.auth0.com/'
       });
      // enforce on all endpoints
     app.use(jwtCheck);

app.get("/api",(req,res)=>{
   res.send("req.body")
})
app.post("/login",async(req,res)=>{
    const{password,username}=req.body

    try {
        const check= await collection.findOne({username:username})
        if(check){
           res.json("exist")
        }else{
            res.json("notexist")
        }
    } catch (e) {
        res.json("notexists")
    }
})
app.post("/signup",async(req,res)=>{
    const{email,password,username}=req.body
    const data={
        email:email,
        password:password,
        username:username
    }

    try {
        const check= await collection.findOne({email:email,username:username})
        if(check){
           res.json("exist")
        }else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e) {
        res.json("notexists")
    }
})
app.listen(port,()=>[
    console.log(`connected port ${port}`)
])