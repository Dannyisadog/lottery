import styled from "styled-components";
import { useState } from "react";
import { useStore } from "react-redux";

const Container = styled.div`
  padding: 10px;
  background: white;
  border-radius: 4px;
  width: 200px;
  height: 100px;

  .countdown {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:70px;
  }
`;

const CountdownArea = () => {
  const store = useStore();

  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");

  store.subscribe(() => {
    const start = store.getState().countdownReducer.start;
    setMin(start.min);
    setSec(start.sec);
  });

  return (
    <Container>
      <div className="countdown">
        {min.length > 1 ? min : `0${min}`}:{String(sec).length > 1 ? sec : `0${sec}`}
      </div>
    </Container>
  );
}

export default CountdownArea;