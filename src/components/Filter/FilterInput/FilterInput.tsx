import React from "react";

import { StyledInput } from "./filterInputStyle";

interface IFilterInputProps {
  filter: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput = (props: IFilterInputProps): JSX.Element => {
  const { filter, handleFilterChange } = props;
  return (
    <>
      <StyledInput
        value={filter}
        onChange={handleFilterChange}
        placeholder="search.."
      />
    </>
  );
};
