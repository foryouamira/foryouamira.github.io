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
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';

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
  // Declare a state variable to track visibility
  const [isVisible, setIsVisible] = useState(false);
  // Function to toggle visibility
  const toggleVisibility = () => {
    if (accept == 2){
      setIsVisible(!isVisible);
      console.log(isVisible);
      console.log(accept);
    }
    else{
      handleAccept();
    }
  };
  const [count, setCount] = useState(30);
  const [accept, setAccept] = useState(0);
  // Step 2: Create a function to handle the button click
  const handleClick = () => {
    setCount(count *1.5);
    console.log(count);
  };
  const handleAccept = () => {
    setAccept(accept + 1);
    console.log("finally");
    console.log(accept);
  }
  var li = ["By pressing the button below you agree that you are, indeed, the cutest, most beautiful, most breathtaking, kindest, smartest girl on this earth. The sole reason I smile in the morning, the reason I have learned to cry. The reason I don't hate myself as much as I have in the past. My northstar. My angel.",
   "I love you.", "Happy Birthday, mouse"];
  return (
    
    <div className="App">
      {!isVisible &&(
        <h1 style={{ marginTop: "300px" }}>{li[accept]}</h1>
      )}
      {!isVisible && (accept<1) &&(
        <h1>My Raazi</h1>
      )}
      {!isVisible && (accept<1) &&(
        <button onClick={toggleVisibility} style={{ marginTop: "20px", padding: "12px 70px",  fontSize: `${count}px`}}>
          {!isVisible} I accept
        </button>
      )}
      {!isVisible && (accept==1)&&(
        <button onClick={toggleVisibility} style={{ marginTop: "20px", padding: "12px 70px",  fontSize: `${count}px`}}>
          {!isVisible} I love you too
        </button>
      )}
      {!isVisible && (accept<1)&&(
        <button onClick={handleClick} style={{ marginTop: "20px", padding: "12px 70px",  fontSize: '30px'}}>
          {!isVisible} I reject
        </button>
      )}
      {!isVisible && (accept==1)&&(
        <button onClick={handleClick} style={{ marginTop: "20px", padding: "12px 70px",  fontSize: '30px'}}>
          {!isVisible} Meh
        </button>
      )}
      {!isVisible && (accept==2)&&(
        <button onClick={toggleVisibility} style={{ marginTop: "20px", padding: "12px 70px",  fontSize: `${count}px`}}>
          {!isVisible} Oh come on this is taking forever
        </button>
      )}
      

      {isVisible && (
      <header className="App-header">
        <a className="App-link" href="https://sherlock-holm.es/stories/html/cano.html#Story-1">A Study in Scarlet</a>
        <Player trackList={tracks} />
        <a className="App-link" href="https://sherlock-holm.es/stories/html/cano.html#Story-4">The Red-Headed League</a>
        <Player trackList={track2}/>
        <h2 className="App-link" >Words to a sleeping princess</h2>
        <Player trackList={track3}/>
      </header>
      )}
    </div>
  );
}

export default App;

