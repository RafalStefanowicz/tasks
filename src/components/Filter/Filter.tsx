import React, { useState } from "react";
import { FilterInput } from "./FilterInput/FilterInput";

import { IRenderTasksContainerProps } from "../../types/Interfaces";

interface IFilterProps {
  renderChildren: (props: IRenderTasksContainerProps) => JSX.Element;
}

export const Filter = ({ renderChildren }: IFilterProps): JSX.Element => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      <FilterInput filter={filter} handleFilterChange={handleFilterChange} />
      {renderChildren({ filter })}
    </>
  );
};
