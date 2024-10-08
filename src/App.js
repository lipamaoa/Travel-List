import Logo from "./components/Logo"
import Form from "./components/Form"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useState } from "react"


export default function App(){

  const [items, setItems]=useState([])
  
  function handleAddItems(item){
    setItems(items=>[...items, item])
  }

  return(
    <div className="app">
  <Logo/>
  <Form onAddItems={handleAddItems}/>
  <PackingList items={items}/>
  <Stats/>
 </div>
  )

}





