import styled from "styled-components";
import TaskDoneButton from "./TaskDoneButton";

const TaskSubs = styled.ul`
  margin-top: 10px;
  li {
    border-bottom: 1px solid white;
    padding: 13px 0;
    font-weight: 500;
    font-size: 16px;
    position: relative;
    padding-right: 20px;

    ${TaskDoneButton} {
        height: 16px;
        width: 16px;
        background-size: 8px;
        position: absolute;
        top: 13px;
        right: 6px;
    }
  }
`;

export default TaskSubs;
