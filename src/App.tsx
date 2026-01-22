import { useEffect, useState } from 'react'
import style from './App.module.scss'
import './App.css'

function App() {
const JokesUrl = `https://official-joke-api.appspot.com/random_joke`
const [JokeData, setJokeData] = useState()

const fetchNewJoke = () => {
  fetch(JokesUrl)
  .then((res) => res.json())
  .then((data) => setJokeData(data))
}

useEffect (()=>{
  fetchNewJoke()
},[])

console.log(JokeData)
  return (
    <>
    <main className={style.mainStyle}>
      <section className={style.section}>
        <p>{JokeData?.setup}</p>
        <p>{JokeData?.punchline}</p>
        <button onClick={fetchNewJoke}>Next</button>
      </section>
    </main>
     
    </>
  )
}

export default App
