import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  StyledBtn,
  StyledIconWrapper,
  StyledFontAwesomeIcon
} from "./actionBtnStyle";

interface IActionBtnProps {
  handleAction: () => void;
  icon: IconDefinition;
  big?: boolean;
}

export const ActionBtn = (props: IActionBtnProps): JSX.Element => {
  const { handleAction, icon, big } = props;
  return (
    <StyledBtn
      onClick={() => {
        handleAction();
      }}
    >
      <StyledIconWrapper big={big}>
        <StyledFontAwesomeIcon icon={icon} />
      </StyledIconWrapper>
    </StyledBtn>
  );
};
