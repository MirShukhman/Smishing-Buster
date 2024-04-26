import './style/App.css';
import Navbar from './comps/Navbar'
import Header from './comps/Header'
import Main from './comps/Main'
import { useState } from 'react';

function App() {
  const [chosenPage, changeChosenPage] = useState('why')
  return (
    <div className="App">
      <Header />
      <Navbar changeChosenPage={changeChosenPage} />
      <Main chosenPage={chosenPage} />
    </div>
  );
}

export default App;
