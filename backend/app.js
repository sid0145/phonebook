const express =require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const path= require('path')

const User=require('./models/user')

// UuaTUKfxvqTIQD6z
const app=express()

mongoose.connect("mongodb+srv://Siddhesh:UuaTUKfxvqTIQD6z@cluster0-xz4rb.mongodb.net/Phonebook?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("oop's");
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use("/",express.static(path.join(__dirname,"angular")));

app.use((req,res,next)=>{
    
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Method",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS");
    res.append('Access-Control-Allow-Methods', 'DELETE')
    next();
})

app.post('/api',(req,res,next)=>{
    const user=new User({
        name:req.body.name,
        dob:req.body.date,
        phone: req.body.phone,
        email:req.body.email
    })
    user.save();
    res.json();
})

app.get('/api',(req,res,next)=>{
    const pageSize=+req.query.pagesize;
    const currentPage=+req.query.page;
    const postQuery=User.find()
    if( pageSize && currentPage){
        postQuery.skip(pageSize*currentPage-1)
        .limit(pageSize);
    }
   User.find().then((users)=>{
    res.json({
        users:users
    })
   }).catch((error)=>{
   console.log(error);
   })
    
})

app.put('/api/:id',(req,res)=>{
    const user= new User({
        _id:req.body.id,
        name:req.body.name,
        dob:req.body.date,
        phone: req.body.phone,
        email:req.body.phone
    })
    User.updateOne({_id:re.params.id}, user).then((resu)=>{
        console.log(resu)
        res.status(200).json()
    })
})

app.delete('/api/:id',(req,res,next)=>{
    User.deleteOne({_id:req.params.id}).then(()=>{
  res.json();
    })
    
})
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"angular","index.html"));
});

module.exports=app