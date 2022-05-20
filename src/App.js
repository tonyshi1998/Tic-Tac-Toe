import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const [turn, setTurn] = useState('O')

  return (
    <div className="App">
      
      <header className="App-content">
        <Header turn={turn}> </Header>
        <Grid onChangeTurn={setTurn}></Grid>
      </header>
    </div>
  );
}

export default App;
