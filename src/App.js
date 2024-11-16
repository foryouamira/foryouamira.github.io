import logo from './logo.svg';
import './App.css';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import CH1ST2 from './content/CH1ST2.mp3'
import CH2ST2 from './content/CH2ST2.mp3'
import RDP1 from './content/LeagueofRedHeadsPT1.mp3'
import Ima from './content/Image.mp3'
import confess from './content/confession.mp3'
import RDP2 from './content/redheadp2.mp3'
const tracks = [
  {
    url: CH1ST2,
    title: "Chapter 1. The Sign of Four",
    tags: ["Spooky Murder"],
  },
  {
    url: CH2ST2,
    title: "Chapter 2. The Statement of the Case",
    tags: ["Spooky Mormons"],
  },
];
const track2 = [
  {
    url: RDP1,
    title: "Part 1. Mystery",
    tags: ["Red Heads"],
  },
  {
    url: RDP2,
    title: "Part 2. Intrigue",
    tags: ["Red Heads"],
  },
];

const track3 = [
  {
    url: Ima,
    title: "Through My Eyes",
    tags: ["love"],
  },
  {
    url: confess,
    title: "A confession",
    tags: ["love"],
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ST2</h1>
        <Player trackList={tracks} />
        <h1>Red Head</h1>
        <Player trackList={track2}/>
        <h1>Words to a sleeping princess</h1>
        <Player trackList={track3}/>
      </header>
    </div>
  );
}

export default App;
