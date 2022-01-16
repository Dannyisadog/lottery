import styled from "styled-components";

import TimeSetting from "./TimeSetting";
import CountdownArea from "./CountdownArea";
import CandidateBlock from "./CandidateBlock";
import Result from "./Result";
import StartButton from "./StartButton";

import { Provider } from "react-redux";
import store from "./store";

const Container = styled.div`
  padding: 15px;
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    .time-setting-wrapper,
    .countdown-area-wrapper,
    .start-button-wrapper {
      width: 30%;
    }
  }
  .candidate-block-wrapper {
    margin-top: 20px;
  }
  .result-wrapper {
    margin-top: 20px;
  }
`;

const Lottery = () => {
  return(
    <Provider store={store}>
      <Container>
        <div className="wrapper">
          <div className="time-setting-wrapper">
            <TimeSetting />
          </div>
          <div className="countdown-area-wrapper">
            <CountdownArea />
          </div>
          <div className="start-button-wrapper">
            <StartButton />
          </div>
        </div>
        <div className="candidate-block-wrapper">
          <CandidateBlock />
        </div>
        <div className="result-wrapper">
          <Result />
        </div>
      </Container>
    </Provider>
  );
}

export default Lottery;