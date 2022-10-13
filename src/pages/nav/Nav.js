import React, { useState } from 'react';
import styled from 'styled-components';
import { VscRecord } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Nav = ({ file }) => {
  const navigate = useNavigate();
  console.log(file);
  return (
    <NavContainer>
      <div className='nav-bar-container'>
        <p className='nav-header'>모든 녹음 항목</p>
        <ul className='nav-list-container'>
          {
            <div className='main'>
              <p>음성 메모를 시작하려면 녹음 버튼을 클릭하십시오.</p>
            </div>
          }
          {file?.map((fileList) => {
            return (
              <li
                key={fileList.size}
                className='nav-list'
                onClick={() => {
                  navigate('/play');
                }}
              >
                <div className='address'>{fileList.name}</div>
                <div className='time-container'>
                  <p>{fileList.lastModified}</p>
                  <p>00:04</p>
                </div>
              </li>
            );
          })}
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
      <div className='main'>
        <p>음성 메모를 시작하려면 녹음 버튼을 클릭하십시오.</p>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.tablet};
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;

  .nav-bar-container {
    width: 30%;
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.lightGreen};

    .nav-header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8%;
      font-weight: 700;
      border-bottom: 1px solid ${({ theme }) => theme.regularGreen};
      color: #fff;
      background-color: ${({ theme }) => theme.bgColor};
    }

    .nav-list-container {
      height: 82%;
      background-color: ${({ theme }) => theme.bgColor};
      color: #fff;

      .nav-list {
        padding: 5%;
        border-bottom: 1px solid ${({ theme }) => theme.regularGreen};

        .address {
          font-weight: 700;
          margin-bottom: 15px;
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
      align-items: center;
      background-color: ${({ theme }) => theme.lightGreen};

      .record {
        width: 60px;
        height: 60px;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .main {
    width: 70%;
    background-color: ${({ theme }) => theme.bgColor};

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #b2b2b2;
    }
  }
`;
