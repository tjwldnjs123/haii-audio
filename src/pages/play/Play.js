import React, { useCallback, useRef } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import styled from "styled-components";

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
    <WaveContainer>
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
    </WaveContainer>
  );
};

const WaveContainer = styled.div`
  background-color: black;
  text-align: center;

  audio::-webkit-media-controls-timeline {
    display: none;
  }

  audio::-webkit-media-controls-volume-slider {
    margin-left: 500px;
  }
`;

export default Play;
