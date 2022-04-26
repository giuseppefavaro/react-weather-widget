import {Intro} from "./components/intro";
import {Cities} from "./components/cities";
import {Weather} from "./components/weather";

import './App.css';

function App() {
  return (
    <main className='card'>
      <Intro />
      <Cities />
      <Weather />
    </main>
  );
}

export default App;
