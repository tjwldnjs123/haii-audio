import React from 'react';
import styled from 'styled-components';
import { VscRecord } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const fileName = sessionStorage.getItem('file');

  return (
    <NavContainer>
      <div className='nav-bar-container'>
        <p className='nav-header'>모든 녹음 항목</p>
        <ul className='nav-list-container'>
          <li
            className='nav-list'
            onClick={() => {
              navigate('/play');
            }}
          >
            <div className='title'>{fileName}</div>
          </li>
        </ul>
        <div className='nav-footer'>
          <VscRecord
            onClick={() => {
              navigate('/record');
            }}
            className='record'
          />
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
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

  .nav-bar-container {
    width: 100%;

    .nav-header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8%;
      font-weight: 700;
      font-size: 20px;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
    .nav-list-container {
      height: 82%;
      color: #fff;
      .nav-list {
        padding: 5%;
        border-bottom: 1px solid #fff;
        cursor: pointer;
        .title {
          font-weight: 700;
          text-align: center;
          font-size: 20px;
        }
        .time-container {
          display: flex;
          justify-content: space-between;
          color: #b2b2b2;
        }
      }
    }
    .nav-footer {
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .record {
        width: 60px;
        height: 60px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
