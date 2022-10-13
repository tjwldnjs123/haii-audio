import React, { useRef } from 'react';
import { WaveSurfer, WaveForm } from 'wavesurfer-react';
import styled from 'styled-components';

const Play = () => {
  const wavesurferRef = useRef();

  const handleWave = (waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load(sessionStorage.getItem('url'));
      // wavesurferRef.current.load(require("../../assets/birds.wav"));
    }
  };

  return (
    <WaveContainer>
      <div className='title-container'>
        <h1>재생화면</h1>
      </div>
      <WaveSurfer onMount={handleWave}>
        <WaveForm
          id='waveform'
          interact={false}
          responsive={true}
          barHeight={3}
          barWidth={3}
          cursorWidth={3}
          waveColor={'white'}
          cursorColor={'#FFFFFF'}
          progressColor={'#b6e3cf'}
        />
      </WaveSurfer>
      <audio
        onPlay={() => wavesurferRef.current.play()}
        onPause={() => wavesurferRef.current.pause()}
        src={sessionStorage.getItem('url')}
        // src={require("../../assets/birds.wav")}
        controls
        controlsList='noplaybackrate'
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
