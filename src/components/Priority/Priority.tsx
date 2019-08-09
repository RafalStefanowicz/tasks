import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { PriorityTypes } from "../../types/PriorityTypes";

interface IPriorityProps {
  priority: PriorityTypes;
}

export const Priority = ({ priority }: IPriorityProps): JSX.Element => {
  switch (priority) {
    case PriorityTypes.low:
      return <FontAwesomeIcon icon={faStar} />;

    case PriorityTypes.medium:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );

    case PriorityTypes.high:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    default:
      return <></>;
  }
};
