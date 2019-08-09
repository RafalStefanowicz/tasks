import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface IEditBtnProps {
  handleEdit: () => void;
}

export const EditBtn = ({ handleEdit }: IEditBtnProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        handleEdit();
      }}
    >
      <span>
        <FontAwesomeIcon icon={faEdit} />
      </span>
    </button>
  );
};
