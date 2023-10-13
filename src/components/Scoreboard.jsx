import Score from "./Score";
import "../css/scoreboard.css"


const ScoreBoard = () => {
  return (
    <>
      <div className="leaderboard">
        <h2>LeaderBoards</h2>
        <section className="scoreboard">
          <Score />
        </section>
      </div>
    </>
  )
}

export default ScoreBoard;