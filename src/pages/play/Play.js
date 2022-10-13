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
          progressColor={'#c0c0c0'}
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
  height: 80vh;
  margin: 7% auto 0 auto;
  background: linear-gradient(
    to top,
    lightgrey 0%,
    lightgrey 1%,
    #e0e0e0 26%,
    #efefef 48%,
    #d9d9d9 75%,
    #bcbcbc 100%
  );
  border-radius: 3%;
  box-shadow: 5px 5px 5px 5px #d1d1d1;
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
