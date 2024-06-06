import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card1 = () => {
    const [posts,setPosts]=useState([]);
   
    const getpost=async()=>{
      const data1=await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(data1.data);
    }
    useEffect(()=>{
  getpost();
    },[])
  return (
    <div className='flex  justify-center p-10 bg-slate-300 cr'>   
    <div>
        {posts.map((c,i)=>{
            
          return(
            <div className='mt-4 flex max-sm:flex-col items-center'>
              <h1 className='font-bold text-center text-black text-xl mr-10'>Post {i+1}:</h1>      
<Card sx={{ maxWidth: 700 }} >
  
<CardActionArea className='pr'>
  <CardContent>
    <Typography className='text-amber-600 font-extrabold' gutterBottom variant="h5" component="div">
     {c.title.toUpperCase()}
    </Typography>
    <Typography variant="body2" color="text.Secondary">
      {c.body}
    </Typography>
  </CardContent>
</CardActionArea>

</Card>
</div>
          )
         
        })}
    
    </div>
    </div> 
   
  )
}

export default Card1