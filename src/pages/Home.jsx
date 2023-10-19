import { useState } from "react";
import "../css/home.css"
import { Link } from "react-router-dom";


const Home = (props) => {

  const [name, setName] = useState('');  
  let {playerName} = props;
  playerName = name;

  const player = (event) => {
    setName(event.target.value)
  };

  const onPlay = () => {
    playerName = name;
    console.log(playerName)
  };

  
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
          <Link to ="/Game"><button className="play" onClick={onPlay}>Play</button></Link>
          <Link to ="/"><button>Options</button></Link>
          <Link to ="/LeaderBoard"><button>High Scores</button></Link>
        </div>
      </main>

    </>
  )
}


export default Home;