import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import waveSound from "../../assets/wave-sound.png";
import { BsFillRecordFill } from "react-icons/bs";
import { IoIosSquare } from "react-icons/io";

const Record = ({ setFile }) => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [timer, setTimer] = useState("00:00.00");

  const navigate = useNavigate();

  const onRecAudio = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 10) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
          alert("녹음이 완료되었습니다.");
        } else {
          setOnRec(false);
        }
        setTimer(e.playbackTime.toFixed(2));
        setTimer(e.playbackTime.toFixed(2));
      };
    });
  };

  const offRecAudio = () => {
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      sessionStorage.setItem("url", URL.createObjectURL(audioUrl));
    }

    const sound = new File([audioUrl], "haii-audio", {
      lastModified: new Date().getTime(),
      type: "audio",
    });

    sessionStorage.setItem("file", sound.name);
    navigate("/");
  }, [audioUrl]);
  return (
    <StyledRecord>
      <section className="wave-form">Haii-audio</section>
      <section className="sound-wave">
        <img alt="파형" src={waveSound} />
      </section>
      <section className="record-time">{timer}</section>
      <footer className="record-btn-box">
        <div className="record-btn" onClick={onRec ? onRecAudio : offRecAudio}>
          {onRec ? <StyledCircle /> : <StyledSquare />}
        </div>
        <div className="complete-btn" onClick={onSubmitAudioFile}>
          완료
        </div>
      </footer>
    </StyledRecord>
  );
};

const StyledSquare = styled(IoIosSquare)`
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: xx-large;
`;

const StyledCircle = styled(BsFillRecordFill)`
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: xx-large;
`;

const StyledRecord = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme }) => theme.tablet};
  height: 80vh;
  margin: 7% auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

  .wave-form {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: xx-large;

    .wave {
      width: 600px;
      height: 300px;
      color: #000;
    }
  }

  .sound-wave {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .record-time {
    margin: 20px 0;
    font-size: xx-large;
    color: #fff;
  }

  .record-btn-box {
    width: 200px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    color: #000;

    .record-btn {
      font-size: xx-large;
      color: #f40d01;

      &:hover {
        cursor: pointer;
      }
    }

    .complete-btn {
      padding: 5px 30px;
      border: 1.5px solid #fff;
      border-radius: 30px;
      font-weight: 600;
      color: #fff;

      &:hover {
        cursor: pointer;
        background-color: silver;
        color: linear-gradient(
          to top,
          lightgrey 0%,
          lightgrey 1%,
          #e0e0e0 26%,
          #efefef 48%,
          #d9d9d9 75%,
          #bcbcbc 100%
        );
      }
    }
  }
`;

export default Record;
