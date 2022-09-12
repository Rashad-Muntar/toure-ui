import React from "react";
import styled from "styled-components";
import { WrapProps } from "./Wraper.types";

const StyledWrap = styled.div<WrapProps>`
    maxW: ${(props) =>
      props.maxW === "sm" ? "760px" : props.maxW === "large" ? "1024" : "1366"}
    border: 0
    borderR: ${(props) =>
      props.borderR === "sm"
        ? "10px"
        : props.borderR === "large"
        ? "20px"
        : "30px"}
    overflow: ${(props) => (props.overflow === "hide" ? "hidden" : "show")}
`;

const Wrap = ({
  maxW,
  overflow,
  border,
  borderR,
  children,
}: WrapProps) => {
  <StyledWrap
    maxW={maxW}
    overflow={overflow}
    border={border}
    borderR={borderR}
  >
    {children}
  </StyledWrap>;
};

export default Wrap;
