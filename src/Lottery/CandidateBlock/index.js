import styled from "styled-components";
import Candidate from "./Candidate";

import { useState } from "react";

import { generateCandidates } from "../../helpers/generator";

const Container = styled.div`
  height: 100vh;
  width: 350px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  
  .content {
    padding: 10px;
    width: 90%;
    height: 95%;
    background: white;
    border-radius: 4px;

    .panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .generate-button {
        width: 70px;
        height: 25px;
        transition: .3s;
        padding: 5px 10px;
        background: #333;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        display: flex;
        align-items:center; 
        justify-content: center;
      }
      .generate-button:hover {
        background: #53b69d;
      }
    }

    .candidate-content-wrapper {
      width: 100%;
      height: 92%;
      margin-top: 20px;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    .candidate-wrapper {
      margin-bottom: 5px;
    }
    .candidate-wrapper:last-child {
      margin-bottom: 0;
    }
  }
`;

const CandidateBlock = () => {
  const [candidates, setCandidates] = useState([]);

  const getCandidates =() => {
    candidates = setCandidates(generateCandidates(10));
  };

  return (
    <Container>
      <div className="content">
        <div className="panel">
          <div className="title">參與抽獎名單</div>
          <div className="generate-button" onClick={getCandidates}>隨機產生</div>
        </div>
        <div className="candidate-content-wrapper">
          {
            candidates.map((candidate, index) => {
              return (
                <div className="candidate-wrapper">
                  <Candidate name={candidate} />
                </div>
              );
            })
          }
        </div>
      </div>
    </Container>
  );
}

export default CandidateBlock;