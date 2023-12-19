import React, { useState, useRef } from 'react';
import './AudioPlayer.css'

const AudioPlayer = ({LinkAudio}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={LinkAudio} />
      <button className='buttonAudioGame' onClick={togglePlay} >
        {isPlaying ? 'Pausar' : 'Ouvir'}
      </button>
    </div>
  );
};

export default AudioPlayer;
