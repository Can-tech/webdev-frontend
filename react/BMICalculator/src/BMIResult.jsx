import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import styled from "styled-components";

const GIF = styled.div`
  width: 100%;
  height: 90%;
  background-image: ${(props) => {
    if (props.$result == "underweight") {
      return 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFmcnhvc3MyaHMxbzJjc2x0MGgwcWZ4YXk5Y3M4NDZtMnFkZTRteCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5t9IcXiBCyw60XPpGu/giphy.gif");';
    } else if (props.$result == "normal") {
      return 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzlqMGUwdTYzNmxpcmwza2U1Ympza3d6MTB3b29qMmNjM2R1YzU5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K9rpAzLYCMvnxjQuDh/giphy.gif");';
    } else if (props.$result == "overweight") {
      return 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRtOHUycHNwNnE5bWRrbXRpaDl6ejh6a3VqczZiaXEycWR4MmR5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o8doWm8E6qeXqjI0E/giphy.gif");';
    } else if (props.$result == "obese") {
      return 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDF2NDIybzhhZWFhMjVhM2M2c2wyb3hobGw2NmM3OGZvc3VvNGE2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nrTjHntgyF7OM/giphy.gif");';
    }
  }};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: #50623a;
`;

const ResultText = styled.h2`
  color: aliceblue;
  font-style: italic;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  text-transform: capitalize;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function BMIResult(props) {
  return (
    <>
      {props.result ? (
        <Wrapper>
          <ResultText>{props.result}</ResultText>{" "}
          <GIF $result={props.result}>
            {" "}
            {props.result == "normal" ? <ConfettiExplosion /> : ""}
          </GIF>
        </Wrapper>
      ) : (
        ""
      )}
    </>
  );
}
