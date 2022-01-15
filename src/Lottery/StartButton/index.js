import styled from "styled-components";
import { useStore } from "react-redux";

const Container = styled.div`
  padding: 10px;
  width: 200px;
  height: 100px;
  background: white;
  border: 0;
  color: #3ed18c;
  border-radius: 4px;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;


  :hover {
    background: #3ed18c;
    color: white;
  }
`;

const StartButton = () => {
  const store = useStore();

  const start = () => {
    const candidates = store.getState().candidateReducer.candidates;
    
    if (candidates.length == 0) {
      alert("請先輸入抽獎名單");
      return;
    }
  }

  return (
    <Container onClick={start}>
      開始
    </Container>
  );
}

export default StartButton;