const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const Port=process.env.PORT|| 3000;
app.use(cors());
app.use(bodyParser.json());
//In-memory data store
let item=[];
let currentId=1;
app.get('/',(req,res)=>{
    res.send('Hello World');    
}
);
//create a new item
app.post('/api/items',(req,res)=>{
    const newItem={
        id:currentId++,
        ...req.body
    };
    item.push(newItem);
    res.status(201).json(newItem);    
})
//read all items
app.get('/api/items',(req,res)=>{
    res.json(item);    
}
);
//Update an item
app.listen(Port,()=>{   
    console.log(`Server is running on port ${Port}`);
}
);
// Export the app for testing
module.exports=app; 