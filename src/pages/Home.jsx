import { useState } from "react";
import "../css/home.css"


const Home = () => {

  const [name, setName] = useState('')

  const player = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <main className="home-container">

        <div className="welcome">
          <h1 className="back">Nulledge</h1>
          <h1 className="front">Nulledge</h1>
        </div>
        
        <div className="name">
          <input type="text" value={name} onChange={player} maxLength={16} placeholder="Player name"/>
        </div>

        <div className="options">
          <button className="play">Play</button>
          <button>Options</button>
          <button>High Scores</button>
        </div>
      </main>

    </>
  )
}


export default Home;