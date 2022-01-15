import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 4px;
  background: pink;
  display: flex;
  
  .candidate-img {
    background: blue;
    height: 100%;
    width: 30%;
  }
  .candidate-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
`;

const Candidate = ({name}) => {
  return (
    <Container>
      <div className="candidate-img"></div>
      <div className="candidate-name">
        {name}
      </div>
    </Container>
  );
}

Candidate.defaultProps = {
  name: "candidate name"
}

Candidate.propTypes = {
  name: PropTypes.string
}

export default Candidate;