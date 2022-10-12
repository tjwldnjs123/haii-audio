import React from 'react';
import styled from 'styled-components';

const Record = () => {
  return (
    <StyledRecord>
      <header>파일 제목</header>
      <section className='wave-form'>파형</section>
      <section className='record-time'>00:00.00</section>
      <footer className='record-btn-box'>
        <div className='record-left-btn'>시작</div>
        <div className='record-center-btn'>재생버튼</div>
        <div className='record-right-btn'>완료</div>
      </footer>
    </StyledRecord>
  );
};

const StyledRecord = styled.section`
  width: ${({ theme }) => theme.tablet};
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};

  header {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: #647d72;
    border-bottom: 1.5px solid #2d3934;
    color: #fff;
    font-weight: 600;
  }

  .wave-form {
    width: 100%;
    height: 300px;
    margin-top: 60px;
    border: 1px solid red;
    color: white;
  }

  .side-wave-form {
    height: 50px;
    margin-top: 80px;
    margin-left: 30px;
    margin-right: 30px;
    border: 1px solid green;
  }

  .record-time {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    color: white;
    font-size: xx-large;
    font-weight: 600;
  }

  .record-btn-box {
    margin-top: 90px;
    display: flex;
    justify-content: space-around;
    color: white;

    .record-left-btn {
      padding: 15px 30px;
      border: 1px solid white;
      border-radius: 30px;
      font-size: smaller;
    }
  }
`;

export default Record;
