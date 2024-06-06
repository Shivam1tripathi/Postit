import './App.css';
import React, { useState } from 'react';

import Card1 from './Card';
import Nav from './Nav';
function App() {
  const [search,setSearch]=useState("");
  const setting=(data)=>{
setSearch(data);
  }
  return (
    <>
    <Nav setting={setting}/>
    <Card1 search={search}/>
    </>
  );
}

export default App;
