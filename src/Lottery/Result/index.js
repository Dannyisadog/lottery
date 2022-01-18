import { useState, useEffect } from "react";
import styled from "styled-components";
import { useStore } from "react-redux";

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 450px;

  .title {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }

  .content {
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid white;
    max-width: 100%;
    height: 100%;
    color: white;
    font-size: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      font-size: 12vw;
    }

    .winner-name {
      color: #c96161;
    }
  }
`;

const Result = () => {
  const store = useStore();
  const [winner, setWinner] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(store.getState().candidateReducer.data.random_index);

  store.subscribe(() => {
    setWinnerIndex(store.getState().candidateReducer.data.random_index);
  });

  useEffect(() => {
    setWinner(store.getState().candidateReducer.data.candidates[winnerIndex]);
  }, [winnerIndex]);
  
  return (
    <Container>
      <div className="title">結果</div>
      <div className="content">
        <div>{winner && "Congrats !"}</div>
        <div className="winner-name">{winner}</div>
      </div>
    </Container>
  );
}

export default Result;