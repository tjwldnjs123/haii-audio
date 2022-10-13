import React, { useCallback, useRef } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import styled from "styled-components";

const Play = () => {
  const wavesurferRef = useRef();

  const handleWave = useCallback((waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(sessionStorage.getItem("url"));
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
      <div className="title-container">
        <h1>재생화면</h1>
      </div>
      <WaveSurfer onMount={handleWave}>
        <WaveForm
          id="waveform"
          waveColor={"white"}
          barHeight={3}
          barWidth={3}
          progressColor={"#b6e3cf"}
          responsive={true}
          interact={false}
          cursorColor={"#FFFFFF"}
          cursorWidth={3}
        />
      </WaveSurfer>
      <audio
        onPlay={play}
        onPause={pause}
        src={sessionStorage.getItem("url")}
        controls
        controlsList="noplaybackrate"
      ></audio>
    </WaveContainer>
  );
};

const WaveContainer = styled.div`
  width: ${({ theme }) => theme.tablet};
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgColor};
  text-align: center;

  .title-container {
    padding: 5% 0;
    border-bottom: 1px solid white;

    h1 {
      font-size: xx-large;
      color: white;
    }
  }

  wave {
    height: 384px !important;
    border-bottom: 1px solid white;
  }

  audio {
    margin-top: 10%;
  }

  audio::-webkit-media-controls-timeline {
    display: none;
  }

  audio::-webkit-media-controls-volume-slider {
    margin-left: 500px;
  }
`;

export default Play;
