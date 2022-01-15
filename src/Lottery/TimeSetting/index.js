import styled from "styled-components";
import { useRef } from "react";
import { useStore } from "react-redux";

const Container = styled.div`
  background: white;
  padding: 10px;
  width: 250px;
  height: 100px;
  border-radius: 4px;
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
    }

    .suffix {
      margin-right: 20px;
    }

    .apply-button {
      padding: 5px 10px;
      color: white;
      background: #333;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      transition: .3s;
    }

    .apply-button:hover {
      color: white;
      background: #3b91d6;
    }
  }
`;

const TimeSetting = () => {
  const store = useStore();
  const minuteRef = useRef(null);

  const setTime = () => {
    const time = parseFloat(minuteRef.current.value);
    
    if (time <= 0 || time > 5) {
      alert("請輸入 0 ~ 5 之間的數目");
      return;
    }

    const min = parseInt(time);
    const sec = Math.round((time - min) * 60);

    const action = {
      type: "countdown/set",
      start: {
        min,
        sec
      }
    }

    console.log(action);

    store.dispatch(action);
  }

  return (
    <Container>
      <div className="title">抽獎時間</div>
      <div className="setting-block">
        <input ref={minuteRef} type="number" />
        <div className="suffix">分鐘</div>
        <div className="apply-button" onClick={setTime}>設定</div>
      </div>
    </Container>
  );
}

export default TimeSetting;