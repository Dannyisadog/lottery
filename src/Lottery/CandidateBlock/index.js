import styled from "styled-components";
import Candidate from "./Candidate";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

import { generateCandidates } from "../../helpers/generator";
import { countdown_status } from "Lottery/store";

const Container = styled.div`
  height: 120px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  
  .title {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }

  .content {
    border: 1px solid white;
    margin-top: 10px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    display: flex;

    .panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      .generate-button,
      .clear-button {
        width: 90px;
        height: 30px;
        transition: .3s;
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "white" : "gray"};
        color: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "white" : "gray"};
        cursor: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "pointer" : "not-allowed"};
        display: flex;
        align-items:center; 
        justify-content: center;
        margin-right: 10px;

        @media (max-width: 800px) {
          width: 10vw;
        }
      }
      .generate-button:hover {
        @media (min-width: 800px) {
          background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#53b69d" : "transparent"};
          border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "gray"};;
        }
      }
      .clear-button:hover {
        @media (min-width: 800px) {
          background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#e07a5b" : "transparent"};
          border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "gray"};;
        }
      }
    }

    .candidate-content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .blank {
      width: 15px;
    }

    .candidate-wrapper {
      height: 80%;
      margin-right: 10px;
    }
    .candidate-wrapper:last-child {
      margin-right: 0;
    }
  }
`;

const CandidateBlock = () => {
  const store = useStore();
  const [candidates, setCandidates] = useState(store.getState().candidateReducer.data.candidates);
  const [status, setStatus] = useState(countdown_status.COUNTDOWN_PENDING);

  const clearCandidates = () => {
    if (status != countdown_status.COUNTDOWN_PENDING) return;
    const candidates = [];
    const action = {
      type: "candidate/set",
      candidates
    }
    store.dispatch(action);
  }
  const getCandidates =() => {
    if (status != countdown_status.COUNTDOWN_PENDING) return;
    const candidates = generateCandidates(10);
    const action = {
      type: "candidate/set",
      candidates: candidates
    }
    store.dispatch(action);
  };

  store.subscribe(() => {
    setCandidates(store.getState().candidateReducer.data.candidates);
    setStatus(store.getState().countdownReducer.data.status);
  });

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Container status={status}>
      <div className="title">??????????????????</div>
      <div className="content">
        <div className="candidate-content-wrapper">
        <div className="panel">
          <div className="clear-button" onClick={clearCandidates}>??????</div>
          <div className="generate-button" onClick={getCandidates}>??????</div>
        </div>
          {
            candidates.map((candidate, index) => {
              return (
                <div className="candidate-wrapper" key={index}>
                  <Candidate name={candidate} />
                </div>
              );
            })
          }
        </div>
        <div className="blank" />
      </div>
    </Container>
  );
}

export default CandidateBlock;