import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { useState } from 'react';

function App() {
  const [winner, setWinner] = useState(" ")

  return (
    <div className="App">
      <header className="App-header">
        {winner !== " " && <p>`${winner} Wins!`</p>}
        <Grid onWin = {setWinner}></Grid>
      </header>
    </div>
  );
}

export default App;
