import styled from "styled-components";

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
  }
`;

const Result = () => {
  return (
    <Container>
      <div className="title">結果</div>
      <div className="content"></div>
    </Container>
  );
}

export default Result;