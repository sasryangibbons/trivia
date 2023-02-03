import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/index'

import './App.css';
import GameContent from './components/GameContent';
import PreGame from './components/PreGame';
import ScoreBoard from './components/ScoreBoard';
import GameScreen from './components/GameScreen';

function App() {

  const gameStarted = useSelector<RootState>((state) => state.quiz.gameStarted)

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<GameScreen />} />
        <Route path='/scoreboard' element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}



export default App;
