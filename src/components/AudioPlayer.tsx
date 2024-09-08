import React, { useRef } from "react";
import "./AudioPlayer.css";

export const AudioPlayer = ({ src, title }: { src: string; title: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) audioRef.current.pause();
  };

  const stopAudio = () => {
    if (audioRef.current) audioRef.current.pause();
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls">
        <button className="play" onClick={playAudio}>
          Play
        </button>
        <button className="pause" onClick={pauseAudio}>
          Pause
        </button>
        <button className="stop" onClick={stopAudio}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
