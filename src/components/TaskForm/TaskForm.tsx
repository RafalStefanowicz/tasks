import React from "react";

import { PriorityTypes } from "../../types/PriorityTypes";
import { getDate } from "../../helpers/helpers";

interface TaskFormProps {
  taskInput: string;
  handleTaskTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  priority: PriorityTypes;
  handlePriorityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: string;
  handleDateChange: (e: React.ChangeEvent<HTMLDataElement>) => void;
}

export const TaskForm = (props: TaskFormProps) => {
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
        <input
          type="date"
          onChange={handleDateChange}
          value={date}
          min={getDate()}
        />
        <span>Date</span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.low}
          checked={PriorityTypes.low === priority}
          onChange={handlePriorityChange}
        />
        <span>{PriorityTypes.low}</span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.medium}
          checked={PriorityTypes.medium === priority}
          onChange={handlePriorityChange}
        />
        <span>{PriorityTypes.medium}</span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value={PriorityTypes.high}
          checked={PriorityTypes.high === priority}
          onChange={handlePriorityChange}
        />
        <span>{PriorityTypes.high}</span>
      </label>
      <textarea value={taskInput} onChange={handleTaskTextChange} />
    </div>
  );
};
