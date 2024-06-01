
import { useState } from 'react';
import './App.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function App() {
  const [data, setdata] = useState(0)

  const HandleAdd=()=>{
    setdata(data+1)
  }
  const HandleRemove=()=>{
    setdata(data-1)
  }

  return (
    <>
      <div className='flex gap-7'>
        <button onClick={HandleRemove} className=' text-2xl p-4 border-2 border-solid border-white rounded-sm text-white hover:bg-red-800 transition-all'><FaMinus /> </button>
        <h1 className=' text-6xl font-bold text-white'>{data}</h1>
        <button onClick={HandleAdd} className=' text-2xl p-4 border-2 border-solid border-white rounded-sm text-white hover:bg-green-800 transition-all'><FaPlus /></button>

      </div>
    </>
  )
}

export default App
