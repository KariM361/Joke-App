import { useEffect } from 'react'
import './App.css'

function App() {
const productUrl = `https://official-joke-api.appspot.com/random_joke`

useEffect (()=>{
  fetch(productUrl)
  .then((res) => res.json())
  .then((data) => console.log(data))

},[])
  return (
    <>
     
    </>
  )
}

export default App
