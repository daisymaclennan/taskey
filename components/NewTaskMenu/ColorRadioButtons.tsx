import styled from "styled-components";

interface ColorRadioButtonProps {
    color: string;
}

export const ColorRadioButton = styled.div<ColorRadioButtonProps>`
  input {
      opacity: 0;
      height: 0;
      width: 0;
      position: fixed;
      top: 0;
      left: -1px;

      &:checked ~ label:before {
        border: 3px solid black;
      }
  }
  label:before {
    content: '';
    width: var(--px34);
    height: var(--px34);
    border-radius: 999px;
    background-color: ${(props) => props.color};
    display: block;
    box-sizing: border-box;
    border: 0px solid black;
    transition: 0.1s ease-in;
    cursor: pointer;
  }
`;

export const ColorRadioButtons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    margin: 0 auto;
    margin-top: var(--px24);
`;
