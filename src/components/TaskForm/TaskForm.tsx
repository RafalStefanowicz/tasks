import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { PriorityTypes } from "../../types/PriorityTypes";
import { getDate } from "../../helpers/helpers";

interface ITaskFormProps {
  taskInput: string;
  handleTaskTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  priority: PriorityTypes;
  handlePriorityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: string;
  handleDateChange: (e: React.ChangeEvent<HTMLDataElement>) => void;
}

export const TaskForm = (props: ITaskFormProps) => {
  const {
    taskInput,
    handleTaskTextChange,
    priority,
    handlePriorityChange,
    date,
    handleDateChange
  } = props;

  return (
    <div>
      <label>
        <span>Date</span>
        <input
          type="date"
          onChange={handleDateChange}
          value={date}
          min={getDate()}
        />
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.low}
          checked={PriorityTypes.low === priority}
          onChange={handlePriorityChange}
        />
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.medium}
          checked={PriorityTypes.medium === priority}
          onChange={handlePriorityChange}
        />
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.high}
          checked={PriorityTypes.high === priority}
          onChange={handlePriorityChange}
        />
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </label>
      <textarea value={taskInput} onChange={handleTaskTextChange} />
    </div>
  );
};
