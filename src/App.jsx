import { useState } from "react"

export default function App() {
  const [color, setColor]= useState("olive")

 
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className=" fixed flex flex-wrap justify-center px-6 py-5 rounded m-10"  style={{backgroundColor: "white"}}>
     <button onClick={()=>setColor("red")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "red"}}>red</button>
     <button onClick={()=>setColor("blue")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "blue"}}>blue</button>
     <button onClick={()=>setColor("gray")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "gray"}}>gray</button>
     <button onClick={()=>setColor("pink")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "pink"}}>pink</button>
     <button onClick={()=>setColor("green")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "green"}}>green</button>
     <button onClick={()=>setColor("yellow")} className="flex flex-wrap justify-center px-6 py-5 rounded m-10" style={{backgroundColor: "yellow"}}>yellow</button>
      </div>
   </div>
    </>
  )
}