import styled from "styled-components";

import TimeSetting from "./TimeSetting";
import CountdownArea from "./CountdownArea";
import CandidateBlock from "./CandidateBlock";
import Result from "./Result";

import { createStore } from "@reduxjs/toolkit";

const Container = styled.div`
  padding: 15px;

  .wrapper {
    display: flex;
    .countdown-area-wrapper {
      margin-left: 20px;
    }
  }
`;

const Lottery = () => {
  return(
    <Container>
      <div className="wrapper">
        <div className="time-setting-wrapper">
          <TimeSetting />
        </div>
        <div className="countdown-area-wrapper">
          <CountdownArea />
        </div>
      </div>
      <div className="candidate-block-wrapper">
        <CandidateBlock />
      </div>
      <div className="result-wrapper">
        <Result />
      </div>
    </Container>
  );
}

export default Lottery;