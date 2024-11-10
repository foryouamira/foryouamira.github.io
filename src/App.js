import logo from './logo.svg';
import './App.css';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import sound from './content/CH1ST2.mp3'
const tracks = [
  {
    url: sound,
    title: "Chapter 1. The Sign of Four",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player trackList={tracks} />
      </header>
    </div>
  );
}

export default App;
