import React from "react";
import { Priority } from "../Priority/Priority";

import { PriorityTypes } from "../../types/PriorityTypes";
import { getDateInputFormat } from "../../helpers/helpers";
import {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
  StyledDate,
  StyledTextArea,
  StyledRadioGroup
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
        <StyledRadioGroup>
          <StyledRadio
            type="radio"
            name="priority"
            id={PriorityTypes.low}
            value={PriorityTypes.low}
            checked={PriorityTypes.low === priority}
            onChange={handlePriorityChange}
          />
          <StyledRadioLabel htmlFor={PriorityTypes.low}>
            <Priority priority={PriorityTypes.low} />
          </StyledRadioLabel>
        </StyledRadioGroup>
        <StyledRadioGroup>
          <StyledRadio
            type="radio"
            name="priority"
            id={PriorityTypes.medium}
            value={PriorityTypes.medium}
            checked={PriorityTypes.medium === priority}
            onChange={handlePriorityChange}
          />
          <StyledRadioLabel htmlFor={PriorityTypes.medium}>
            <Priority priority={PriorityTypes.medium} />
          </StyledRadioLabel>
        </StyledRadioGroup>

        <StyledRadioGroup>
          <StyledRadio
            type="radio"
            name="priority"
            id={PriorityTypes.high}
            value={PriorityTypes.high}
            checked={PriorityTypes.high === priority}
            onChange={handlePriorityChange}
          />
          <StyledRadioLabel htmlFor={PriorityTypes.high}>
            <Priority priority={PriorityTypes.high} />
          </StyledRadioLabel>
        </StyledRadioGroup>
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
