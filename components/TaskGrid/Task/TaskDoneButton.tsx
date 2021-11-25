import styled from "styled-components";

interface TaskDoneButtonProps {
  isChecked?: boolean;
}

const TaskDoneButton = styled.button<TaskDoneButtonProps>`
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 200px;
  border: none;
  box-shadow: none;
  height: 28px;
  width: 28px;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background-color: black;
  }

  &:disabled {
    opacity: 0.3;
  }

  ${(props) =>
    props.isChecked &&
    `
    background-color: black;
    background-image: url("https://cdn.huler.io/v2/wp-content/uploads/2021/09/10145140/check.png");
  `}

  ${(props) =>
    !props.isChecked &&
    `
    &:hover {
        sbackground-color: black;
        background-image: url("https://cdn.huler.io/v2/wp-content/uploads/2021/09/10145140/check.png");
    }
  `}
`;

export default TaskDoneButton;
