import React from 'react';
import styled from 'styled-components';

const Record = () => {
  return (
    <StyledRecord>
      <header>파일 제목</header>
      <section className='wave-form'>파형</section>
      <section className='side-wave-form'>side 파형</section>
      <section className='record-time'>00:00.00</section>
      <section className='record-btn-box'>
        <div className='record-left-btn'>시작</div>
        <div className='record-center-btn'>시작</div>
        <div className='record-right-btn'>완료</div>
      </section>
    </StyledRecord>
  );
};

const StyledRecord = styled.section`
  width: ${({ theme }) => theme.tablet};
  height: 100vh;
  background-color: #2c2c2d;

  header {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: #363439;
    border-bottom: 2px solid black;
    color: #a5a3a8;
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
  }
`;

export default Record;
