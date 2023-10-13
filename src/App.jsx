import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScoreBoard from "./components/Scoreboard"
import Options from "./components/Options"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Settings" element={<Options />} />
          <Route path="/Leaderboard" element={<ScoreBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
