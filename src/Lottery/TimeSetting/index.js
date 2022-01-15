import styled from "styled-components";
import { useRef } from "react";

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
  const minuteRef = useRef(null);

  const setTime = () => {
    alert(minuteRef.current.value);
  }

  return (
    <Container>
      <div className="title">抽獎時間</div>
      <div className="setting-block">
        <input ref={minuteRef} type="text" />
        <div className="suffix">分鐘</div>
        <div className="apply-button" onClick={setTime}>設定</div>
      </div>
    </Container>
  );
}

export default TimeSetting;