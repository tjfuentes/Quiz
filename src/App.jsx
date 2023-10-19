import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScoreBoard from "./components/Scoreboard"
import Options from "./components/Options"
import Game from "./components/Game"


function App() {
  let playerName;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home player={playerName} />} />
          <Route path="/Game" element={<Game player={playerName} />} />
          <Route path="/Settings" element={<Options />} />
          <Route path="/Leaderboard" element={<ScoreBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
