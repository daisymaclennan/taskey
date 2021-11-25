import React, { useState } from "react";
import styled from "styled-components";

interface MoveHandleProps {
  className?: string;
  setDisableDrag: (val: boolean) => void;
}

const MoveHandle = ({ className, setDisableDrag }: MoveHandleProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDisableDrag(false);
  };

  const stopDrag = () => {
    setIsDragging(false);
    setDisableDrag(true);
  };
  return (
    <button
      className={`${className} ${isDragging && `drag`}`}
      type="button"
      onTouchStart={(e) => startDrag(e)}
      onTouchEnd={stopDrag}
      onMouseDown={(e) => startDrag(e)}
      onMouseUp={stopDrag}
      style={{ touchAction: "none" }}
    >
      <div />
      <span />
    </button>
  );
};

MoveHandle.defaultProps = {
  className: "",
};

interface StyledMoveHandleProps {
  colorMode?: "light" | "dark";
}

const StyledMoveHandle = styled(MoveHandle)<StyledMoveHandleProps>`
  width: 50px;
  height: 50px;
  position: absolute;
  padding: 15px;
  border: none;
  background: transparent;
  padding: 0;
  border-radius: 0;
  transition: var(--transition);
  cursor: pointer;
  z-index: var(--z-default);
  transform: rotate(-90deg);
  position: absolute;
  left: -5px;
  top: -5px;

  &:focus {
    outline: 0;
  }

  &.drag {
    span,
    &:before,
    &:after {
      background-color: black !important;
      opacity: 1;
    }
    > div {
      width: 50px !important;
      height: 50px !important;
    }
  }

  /* div {
    transition: var(--transition);
    background: ${(props) => (props.colorMode === "dark" ? "black" : "white")};
    height: 0;
    width: 0;
    position: absolute;
    top: -1px;
    right: -1px;
    border-radius: 15px;
  } */

  span,
  &:before,
  &:after {
    transition: var(--transition);
    position: absolute;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: white;
    ${(props) =>
      props.colorMode !== undefined &&
      `
      background: ${props.colorMode === "dark" ? "black" : "white"};
    `}

    z-index: var(--z-default);
    opacity: 0.8;
  }

  &:before,
  &:after {
    content: "";
    transition: var(--transition);
  }

  span {
    top: 20px;
    right: 20px;
  }
  &:before {
    top: 20px;
    right: 32px;
  }

  &:after {
    top: 32px;
    right: 20px;
  }

  &:hover {
    &:after {
      top: 30px;
    }

    &:before {
      right: 30px;
    }
  }
`;

export default StyledMoveHandle;
