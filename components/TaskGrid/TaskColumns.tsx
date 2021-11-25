import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";

const TaskColumns = styled.div`
  ${contentContainer}
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--px26);
`;

export default TaskColumns;
