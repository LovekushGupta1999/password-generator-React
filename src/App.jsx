import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const [password,setpassword]=useState("");
  const [numberallow,setnumberallow]=useState("")
  const [specharallow,setspecharallow]=useState("")

  useEffect(() => {
    return () => {
      for(int i=0; i<=8; ++i){
          
      }
};
}, [dependencies]);


  return (
    <>
    <h1>Password Generator</h1>

    

    </>
  )
}

export default App
