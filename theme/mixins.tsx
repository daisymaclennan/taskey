import { css } from "styled-components";
import theme from "./breakpoints";

const contentContainerSmall = css`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--small-max-width);

  @media (min-width: ${theme.breakpoints.xSmall}) {
    width: 80%;
  }
`;

const contentContainer = css`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--max-width);

  @media (min-width: ${theme.breakpoints.xSmall}) {
    width: 80%;
  }
`;

const contentContainerXl = css`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--big-max-width);
`;

const verticalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export { contentContainerSmall, contentContainer, contentContainerXl, verticalCenter };
