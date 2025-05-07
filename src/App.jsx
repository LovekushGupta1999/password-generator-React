import { useState,useEffect, useCallback} from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const [password,setpassword]=useState("");
  const [numberallow,setnumberallow]=useState(false)
  const [specharallow,setspecharallow]=useState(false)

const passwordgen=useCallback(()=>{
     let pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"
     let num='1234567890'
     let spechar='!@#$%^&*'
     if(numberallow) str+=num
     if(specharallow)str+=spechar
     for(let i=1; i<=len; i++){
     let index=Math.floor(Math.random()*str.len())
     pass+=str.charAt(index)
     }
     setpassword(pass)
} , [len,numberallow,specharallow,setpassword])

useEffect(()=>{
  passwordgen()
},[len,numberallow,specharallow,setpassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3' 
        placeholder='Password'
        readOnly/>
        <button className='outline-nonebg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
       <div className='flex item-center gap-x-1'>
        <input type="range"
        min={6}
        msc={100}
        value={len}
        className='cursor-pointer'
        onChange={(e)=>setlen(e.target.value)} />
        <label >Length:{len}</label>
       </div>
       <div className='flex item-center gap-x-1'>
        <input type="chechbox"
        defaultChecked={numberallow} 
        id='numberinput'
        onChange={()=>{
          setnumberallow((prev)=>!prev)
        }}
        
        />
<label>number</label>
       </div>
       <div className='flex item-center gap-x-1'>
        <input type="chechbox"
        defaultChecked={specharallow} 
        id='numberinput'
        onChange={()=>{
          setspecharallow((prev)=>!prev)
        }}
        
        />
<label>Special character</label>
       </div>
      </div>
        </div>
   

    

    </>
  )
}

export default App
