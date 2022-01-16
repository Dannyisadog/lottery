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
        height: 50%;
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
      }
      .generate-button:hover {
        background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#53b69d" : "transparent"};
        border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "gray"};;
      }
      .clear-button:hover {
        background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#e07a5b" : "transparent"};
        border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "gray"};;
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
  const [candidates, setCandidates] = useState(store.getState().candidateReducer.candidates);
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
    setCandidates(store.getState().candidateReducer.candidates);
    setStatus(store.getState().countdownReducer.data.status);
  });

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Container status={status}>
      <div className="title">參與抽獎名單</div>
      <div className="content">
        <div className="panel">
          <div className="clear-button" onClick={clearCandidates}>清除</div>
          <div className="generate-button" onClick={getCandidates}>隨機產生</div>
        </div>
        <div className="candidate-content-wrapper">
          {
            candidates.map((candidate, index) => {
              return (
                <div className="candidate-wrapper" key={index}>
                  <Candidate />
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