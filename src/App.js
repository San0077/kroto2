import './App.css';
import React,{useState} from 'react';
import {Routes, Route,useNavigate ,Navigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useCallback } from 'react';

 function App() {
  const obj=[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  const card =[]
  const [details, setdetails] = useState();
  const [open, setopen] = useState(false);

    useEffect(()=>{
      console.log("rendering")
      for(let i=0;i<obj.length;i++){
        fetch(`https://fakestoreapi.com/products/category/${obj[i]}`).then(data=>data.json())
        .then( data=>{
             card.push(data[0])
            if(i=="3"){
              setopen(true)
              setdetails(card)
            }
            
        })
       }
    },[])
    
      const add=useCallback((d)=>{
        fetch(`https://fakestoreapi.com/products/category/${d.category}`).then(data=>data.json())
        .then(data=>{
              const result= data.find(data=>data.id==d.id)
              var index=data.indexOf(result)
              index = index+1;
              if(index >= data.length){
                alert("no more data of this category")
              }else{  setdetails([...details,data[index]])}
            
        })
      },[details])
  
  return (
  <div className ="app">
    { open?details.map(d=>
    <div>
      
  <Card sx={{ maxWidth: 300,}}>
  <Typography gutterBottom variant="h5" component="div">
          {d.category}
        </Typography>
      <CardMedia
        component="img"
        height="140"
        image= {d.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {d.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>add(d)}>ADD</Button>
      </CardActions>
    </Card>
    </div>
    ):"loading"}
 </div>
   
  )
}


export default App;
