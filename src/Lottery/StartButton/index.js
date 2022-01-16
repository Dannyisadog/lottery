import styled from "styled-components";
import { useState } from "react";
import { useStore } from "react-redux";
import { countdown_status } from "Lottery/store";

const Container = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid white;
  color: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#3ed18c" : "#727272"};
  border-radius: 4px;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "pointer" : "not-allowed"};


  :hover {
    background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#3ed18c" : "transparent"};
    color: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "white" : "727272"};
    border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "white"};
  }
`;

const StartButton = () => {
  const store = useStore();
  const [status, setStatus] = useState(countdown_status.COUNTDOWN_PENDING);

  store.subscribe(() => {
    const data = store.getState().countdownReducer.data;
    setStatus(data.status);

  });

  const start = () => {
    const candidates = store.getState().candidateReducer.candidates;
    const data = store.getState().countdownReducer.data;
    
    if (data.status != countdown_status.COUNTDOWN_PENDING) return;

    if (candidates.length == 0) {
      alert("請先輸入抽獎名單");
      return;
    }

    const action = {
      type: "countdown/setStatus",
      data: {
        status: countdown_status.COUNTDOWN_START
      }
    }

    store.dispatch(action);
  }

  return (
    <Container onClick={start} status={status}>
      開始
    </Container>
  );
}

export default StartButton;