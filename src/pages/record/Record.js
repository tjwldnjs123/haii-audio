import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import waveSound from '../../assets/wave-sound.png';
import { BsFillSquareFill } from 'react-icons/bs';
import { VscRecord } from 'react-icons/vsc';
import { FiMic } from 'react-icons/fi';

const Record = ({ setFile }) => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [timer, setTimer] = useState('00:00.00');

  const navigate = useNavigate();

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      // AudioBufferSourceNode 연결
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득 후 녹음 시작
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 10) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
          alert('녹음이 완료되었습니다.');
        } else {
          setOnRec(false);
        }
        setTimer(e.playbackTime.toFixed(2));
      };
    });
  };

  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      console.log(e.data);
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      sessionStorage.setItem('url', URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
    }
    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], 'haii-audio', {
      lastModified: new Date().getTime(),
      type: 'audio',
    });
    setFile((prev) => [...prev, sound]); // File 정보 출력
    console.log(sound);
    navigate('/');
  }, [audioUrl]);
  return (
    <StyledRecord>
      <section className='wave-form'>Sound Recorder</section>
      <img src={waveSound} />
      <section className='record-time'>{timer}</section>
      <footer className='record-btn-box'>
        <div className='record-btn' onClick={onRec ? onRecAudio : offRecAudio}>
          {onRec ? <VscRecord /> : <BsFillSquareFill />}
        </div>
        <div className='complete-btn' onClick={onSubmitAudioFile}>
          완료
        </div>
      </footer>
    </StyledRecord>
  );
};

const StyledRecord = styled.section`
  width: ${({ theme }) => theme.tablet};
  margin: 0 auto;
  background: linear-gradient(
    to top,
    lightgrey 0%,
    lightgrey 1%,
    #e0e0e0 26%,
    #efefef 48%,
    #d9d9d9 75%,
    #bcbcbc 100%
  );

  header {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background: linear-gradient(
      to top,
      lightgrey 0%,
      lightgrey 1%,
      #e0e0e0 26%,
      #efefef 48%,
      #d9d9d9 75%,
      #bcbcbc 100%
    );
    border-bottom: 1.5px solid #2d3934;
    color: #fff;
    font-weight: 600;
  }

  .wave-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    color: #fff;

    .wave {
      width: 600px;
      height: 300px;
      color: #000;
    }
  }

  .side-wave-form {
    margin-top: 80px;
    margin-left: 30px;
    margin-right: 30px;
    border: 1px solid green;
  }

  .record-time {
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: xx-large;
    font-weight: 600;
  }

  .record-btn-box {
    display: flex;
    justify-content: space-around;
    color: #000;

    .record-btn {
      font-size: xx-large;
      color: #f40d01;

      &:hover {
        cursor: pointer;
      }
    }

    .complete-btn {
      padding: 10px 30px;
      border: 1.5px solid #fff;
      border-radius: 30px;
      font-weight: 600;
      color: #fff;

      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: ${({ theme }) => theme.bgColor};
      }
    }
  }
`;

export default Record;
