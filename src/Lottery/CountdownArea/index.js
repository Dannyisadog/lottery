import styled from "styled-components";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { draw } from "helpers/drawer";

import { countdown_status } from "Lottery/store";

const Container = styled.div`
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  width: 100%;
  height: 100px;

  .countdown {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    @media (max-width: 800px) {
      font-size: 7vw;
    }
  }
`;

const CountdownArea = () => {
  const store = useStore();

  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState(countdown_status.COUNTDOWN_PENDING);

  store.subscribe(() => {
    const data = store.getState().countdownReducer.data;
    setMin(data.min);
    setSec(data.sec);
    setStatus(data.status);
  });

  const [remainMin, setRemainMin] = useState(0);
  const [remainSecond, setRemainSecond] = useState(0)

  useEffect(() => {
    const countDownSecond = min * 60 + sec;
    setRemainMin(Math.floor(countDownSecond / 60));
    setRemainSecond(countDownSecond - 60 * Math.floor(countDownSecond / 60));
  }, [min, sec, status]);

  useEffect(() => {
    const countDownSecond = min * 60 + sec;

    if (countDownSecond == 0 || status == countdown_status.COUNTDOWN_PENDING) return;

    const startTime = Date.now()
    const countDownTimer = setInterval(() => {
      const pastSeconds = parseInt((Date.now() - startTime) / 1000)
      const remain = (countDownSecond - pastSeconds)

      setRemainMin(Math.floor(remain / 60));
      setRemainSecond(remain < 0 ? 0 : remain - (60 * Math.floor(remain / 60)));
      if (remain <= 0) {
        const action = {
          type: "countdown/setStatus",
          data: {
            status: countdown_status.COUNTDOWN_PENDING
          }
        }
        store.dispatch(action);

        const drawAction = {
          type: "candidate/draw",
          random_index: draw(store.getState().candidateReducer.data.candidates.length)
        }

        store.dispatch(drawAction);
      
        clearInterval(countDownTimer)
      }
    }, 1000)
  }, [status]);


  return (
    <Container>
      <div className="countdown">
        {String(remainMin).length > 1 ? remainMin : `0${remainMin}`}:{String(remainSecond).length > 1 ? remainSecond : `0${remainSecond}`}
      </div>
    </Container>
  );
}

export default CountdownArea;