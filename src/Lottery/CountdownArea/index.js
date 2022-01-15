import styled from "styled-components";

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
  return (
    <Container>
      <div className="countdown">
        00:00
      </div>
    </Container>
  );
}

export default CountdownArea;