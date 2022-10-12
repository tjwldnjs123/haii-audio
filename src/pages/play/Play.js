import React, { useCallback, useRef } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";

const Play = ({ url }) => {
  const wavesurferRef = useRef();

  const handleWave = useCallback((waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(url);
    }
  }, []);

  const play = useCallback(() => {
    wavesurferRef.current.play();
  }, []);

  const pause = useCallback(() => {
    wavesurferRef.current.pause();
  }, []);

  return (
    <>
      <WaveSurfer onMount={handleWave}>
        <WaveForm
          id="waveform"
          waveColor={"white"}
          barHeight={2}
          barWidth={2}
          progressColor={"blue"}
          responsive={true}
          interact={false}
        />
      </WaveSurfer>
      <audio
        onPlay={play}
        onPause={pause}
        src={url}
        controls
        controlsList="noplaybackrate"
      ></audio>
      ;
    </>
  );
};

export default Play;
