import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-bar-container">
        <p className="nav-header">모든 녹음 항목</p>
        <div className="nav-list-container">
          <div className="nav-list">
            <div className="address">역삼동 736-38</div>
            <div className="time-container">
              <p>오후 8:00</p>
              <p>00:04</p>
            </div>
          </div>
          <div className="nav-list">
            <div className="address">역삼동 736-38</div>
            <div className="time-container">
              <p>오후 8:00</p>
              <p>00:04</p>
            </div>
          </div>
        </div>

        <div className="nav-footer">
          <FontAwesomeIcon className="record" icon={faRecordVinyl} />
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  width: ${({ theme }) => theme.tablet};
  height: 100vh;

  .nav-bar-container {
    width: 30%;
    height: 100%;

    .nav-header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8%;
      font-weight: 700;
      border-bottom: 1px solid gray;
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
        border-bottom: 1px solid blue;

        .address {
          font-weight: 700;
          margin-bottom: 15px;
        }

        .time-container {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .nav-footer {
      height: 10%;

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.lightBlue};
      .record {
        width: 60px;
        height: 60px;
        color: red;
      }
    }
  }
`;
