import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-bar-container">
        <p className="nav-header">모든 녹음 항목</p>
        <ul className="nav-list-container">
          <li className="nav-list">
            <div className="address">역삼동 736-38</div>
            <div className="time-container">
              <p>오후 8:00</p>
              <p>00:04</p>
            </div>
          </li>
        </ul>
        <div className="nav-footer">
          <FontAwesomeIcon className="record" icon={faRecordVinyl} />
        </div>
      </div>
      <div className="main">
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
        height: 50px;
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
