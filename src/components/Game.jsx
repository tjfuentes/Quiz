import "../css/game.css"

const Game = () => {

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
          <h3>which of these is a type of monster found in minecraft?</h3>
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
          <h5>Player 1</h5>
          <h5>time: 30</h5>
          <h5>Score: 600</h5>
        </div>
      </main>
    </>
  )
}

export default Game;