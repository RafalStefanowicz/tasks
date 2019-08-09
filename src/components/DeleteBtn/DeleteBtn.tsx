import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface IDeleteBtnProps {
  handleDelete: () => void;
}

export const DeleteBtn = ({ handleDelete }: IDeleteBtnProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        handleDelete();
      }}
    >
      <span>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </button>
  );
};
