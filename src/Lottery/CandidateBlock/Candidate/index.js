import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100%;
  border-radius: 4px;
  background: white;
  display: flex;
  color: #333;
  
  .candidate-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
  }
`;

const Candidate = ({name}) => {
  return (
    <Container>
      <div className="candidate-name">
        {name}
      </div>
    </Container>
  );
}

Candidate.defaultProps = {
  name: "name"
}

Candidate.propTypes = {
  name: PropTypes.string
}

export default Candidate;