import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IActionBtnProps {
  handleAction: () => void;
  icon: IconDefinition;
}

export const ActionBtn = (props: IActionBtnProps): JSX.Element => {
  const { handleAction, icon } = props;
  return (
    <button
      onClick={() => {
        handleAction();
      }}
    >
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
    </button>
  );
};
