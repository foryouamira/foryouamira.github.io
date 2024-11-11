import logo from './logo.svg';
import './App.css';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import CH1ST2 from './content/CH1ST2.mp3'
import CH2ST2 from './content/CH2ST2.mp3'
const tracks = [
  {
    url: CH1ST2,
    title: "Chapter 1. The Sign of Four",
    tags: ["house"],
  },
  {
    url: CH2ST2,
    title: "Chapter 2. The Statement of the Case",
    tags: ["house"],
  },
];

function App() {
  return (
    <div className="App">
      <title>My voice</title>
      <title>Sherlock</title>
      <header className="App-header">
        <Player trackList={tracks} />
      </header>
    </div>
  );
}

export default App;
