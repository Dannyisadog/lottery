import styled from "styled-components";
import { useEffect, useRef, useState} from "react";
import { useStore } from "react-redux";
import { countdown_status } from "Lottery/store";

const Container = styled.div`
  border: 1px solid white;
  color: white;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .setting-block {
    display: flex;
    align-items: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }


    input {
      height: 25px;
      width: 80px;
      border: 1px solid #cecece;
      border-radius: 4px;
      margin-right: 5px;
      padding: 0px 10px;
      font-size: 18px;
      background: transparent;
      color: white;
    }

    .suffix {
      margin-right: 20px;
    }

    .apply-button {
      padding: 5px 10px;
      border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "white" : "gray"};
      border-radius: 4px;
      cursor: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "pointer" : "not-allowed"};;
      transition: .3s;
      color: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "white" : "gray"};
    }

    .apply-button:hover {
      border: 1px solid ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "transparent" : "gray"};
      background: ${(props) => props.status == countdown_status.COUNTDOWN_PENDING ? "#3b91d6" : "transparent"};;
    }
  }
`;

const TimeSetting = () => {
  const store = useStore();
  const minuteRef = useRef(null);
  const [status, setStatus] = useState(countdown_status.COUNTDOWN_PENDING);

  store.subscribe(() => {
    const data = store.getState().countdownReducer.data;
    setStatus(data.status);
  });

  const setTime = () => {
    const time = parseFloat(minuteRef.current.value);
    
    if (status != countdown_status.COUNTDOWN_PENDING) return;

    if (!time || time <= 0 || time > 5) {
      alert("請輸入 0 ~ 5 之間的數字");
      return;
    }

    const min = parseInt(time);
    const sec = Math.round((time - min) * 60);

    const action = {
      type: "countdown/set",
      data: {
        min,
        sec
      }
    }

    store.dispatch(action);
  }

  useEffect(() => {
    setTime();
  }, []);

  return (
    <Container status={status}>
      <div className="title">抽獎時間</div>
      <div className="setting-block">
        <input ref={minuteRef} type="number" defaultValue="0.5" />
        <div className="suffix">分鐘</div>
        <div className="apply-button" onClick={setTime}>設定</div>
      </div>
    </Container>
  );
}

export default TimeSetting;