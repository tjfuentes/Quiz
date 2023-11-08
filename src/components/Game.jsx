import { useEffect, useState } from "react";
import "../css/game.css"

const Game = (props) => {
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease time by 1 second
      setTime(prevTime => prevTime - 1);
    }, 1000);

    // Clear interval when time reaches 0
    if (time === 0) {
      clearInterval(interval);
      console.log("Time's Up");
    }

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [time]);


  const player = props.playerName;
  return(
    <>
      <main className="game-container">
        <div className="difficulty">
          <h2>
            Difficuly: Easy
          </h2>
        </div>
        <div className="guide">
          <h2>Question #1</h2>
        </div>
        <div className="question">
          <h3>which of these, is a type of monster found in minecraft?</h3>
        </div>

        <div className="choices">
          <div className="left-side">
            <h5>A. Skeleton</h5>
            <h5>B. Werewolf</h5>
          </div>
          <div className="right-side">
            <h5>C. Vampire</h5>
            <h5>D. Minotaur</h5>
          </div>
        </div>
        <div className="time-score">
          <h5>{player}</h5>
          <h5>Time: <span>{time}</span></h5>
          <h5>Score: {score}</h5>
        </div>
      </main>
    </>
  )
}

export default Game;