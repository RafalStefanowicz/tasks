import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ICompleteBtnProps {
  handleComplete: () => void;
}

export const CompleteBtn = ({
  handleComplete
}: ICompleteBtnProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        handleComplete();
      }}
    >
      <span>
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </button>
  );
};
