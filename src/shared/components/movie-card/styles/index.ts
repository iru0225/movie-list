import styled from "styled-components";

export const CardContainer = styled.button`
  width: 200px;
  height: 300px;
  position: relative;

  div {
    position: absolute;
    background: #f2f2f2;
    opacity: 0.7;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    transition: height 0.6s ease;
  }

  &:hover {
    transform: scale(1.05);
    div {
      top: 0;
      height: 100%;
    }
  }
`