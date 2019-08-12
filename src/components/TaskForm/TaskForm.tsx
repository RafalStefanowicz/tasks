import React from "react";
import { Priority } from "../Priority/Priority";

import { PriorityTypes } from "../../types/PriorityTypes";
import { getDateInputFormat } from "../../helpers/helpers";
import {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
  StyledDate,
  StyledTextArea
} from "./taskFormStyle";

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
    <>
      <StyledRadioWrapper>
        <StyledRadioLabel>
          <StyledRadio
            type="radio"
            name="priority"
            value={PriorityTypes.low}
            checked={PriorityTypes.low === priority}
            onChange={handlePriorityChange}
          />
          <Priority priority={PriorityTypes.low} />
        </StyledRadioLabel>
        <StyledRadioLabel>
          <StyledRadio
            type="radio"
            name="priority"
            value={PriorityTypes.medium}
            checked={PriorityTypes.medium === priority}
            onChange={handlePriorityChange}
          />
          <Priority priority={PriorityTypes.medium} />
        </StyledRadioLabel>
        <StyledRadioLabel>
          <StyledRadio
            type="radio"
            name="priority"
            value={PriorityTypes.high}
            checked={PriorityTypes.high === priority}
            onChange={handlePriorityChange}
          />
          <Priority priority={PriorityTypes.high} />
        </StyledRadioLabel>
      </StyledRadioWrapper>

      <StyledDate
        type="date"
        onChange={handleDateChange}
        value={date}
        min={getDateInputFormat()}
      />

      <StyledTextArea value={taskInput} onChange={handleTaskTextChange} />
    </>
  );
};
