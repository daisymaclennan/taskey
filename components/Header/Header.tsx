import { Header } from "next/dist/lib/load-custom-routes";
import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";

interface HeaderProps {
  className?: string;
  newTaskMenuActive: boolean;
  setNewTaskMenuActive: (val: boolean) => void;
}

const Header = ({
  className,
  newTaskMenuActive,
  setNewTaskMenuActive,
}: HeaderProps) => (
  <header className={className}>
    <div>
      <h1>taskey</h1>
      <button onClick={() => setNewTaskMenuActive(!newTaskMenuActive)}>
        +
      </button>
    </div>
  </header>
);

const StyledHeader = styled(Header)`
  height: var(--px120);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-globalui);

  > div {
    ${contentContainer}
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    > h1 {
      font-size: var(--px34);
    }

    > button {
      font-size: var(--px40);
      transition: var(--transition);
      cursor: pointer;

      ${(props) => props.newTaskMenuActive && `transform: rotate(45deg);`}

      &:hover {
        transform: scale(1.1)
          ${(props) => props.newTaskMenuActive && `rotate(45deg)`};
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export default StyledHeader;
