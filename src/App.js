import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className='player-wrapper'>
    <ReactPlayer
      url='https://youtube.com/watch?v=miphVBlfaCA'
      className='react-player'
      playing
      width='100%'
      height='100%'
    />
  </div>
  );
}

export default App;
