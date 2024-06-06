import React, { useState } from 'react'

const Nav = (props) => {
  const[input,setInput]=useState("");
  return (
    <div className='w-full flex max-sm:flex-col justify-between  sm:p-11 items-center bg-slate-900 min-h-24'>
<h1 className='text-white font-semibold text-5xl hover:text-blue-600 cursor-pointer'>All Posts</h1>
<div className='sm:flex '>
<input className=' rounded-md h-7 w-64 pl-2 max-sm:mt-3' placeholder='Search Post....' onChange={(e)=>setInput(e.target.value)} type="text" />
<div className='max-sm:mt-5  max-sm:mb-4 sm:flex sm:flex-row'>
<button className='bg-blue-500 ml-2 w-20 rounded-md h-7 font-bold text-white' onClick={(e)=>{
  props.setting(input);
}}>Search</button>
<button className='bg-red-500 ml-2 w-20 rounded-md h-7 font-bold text-white' onClick={(e)=>{
  props.setting("");
}}>Reset</button>
</div>
</div>

    </div>
  )
}

export default Nav