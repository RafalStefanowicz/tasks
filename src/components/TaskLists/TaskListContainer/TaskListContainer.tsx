import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { CompletedTasks } from "../CompletedTasks/CompletedTasks";
import { IncompleteTasks } from "../IncompleteTasks/IncompleteTasks";
import { addTasks } from "../../../actions/addTasks";
import { IStoreState } from "../../../reducers/reducers";
import {
  divideTasks,
  getTaskLC,
  sortTasks,
  filterTasks
} from "../../../helpers/helpers";
import { ITask } from "../../../reducers/tasks";
import { RouteTypes } from "../../../types/RouteTypes";
import { IRenderTasksContainerProps } from "../../../types/Interfaces";

interface ITaskListContainerProps {
  tasks: ITask[];
  addTasks: typeof addTasks;
}

const _TaskListContainer = (props: ITaskListContainerProps): JSX.Element => {
  const { tasks, addTasks } = props;
  const isInitialMount = useRef(true);

  useEffect(() => {
    const tasksLC = getTaskLC();
    addTasks(tasksLC);
  }, [addTasks]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const dividedTasks = divideTasks(tasks);

  return (
    <>
      <Switch>
        <Route
          exact
          path={RouteTypes.today}
          render={(): JSX.Element => (
            <IncompleteTasks tasks={dividedTasks.today} />
          )}
        />
        <Route
          path={RouteTypes.future}
          render={(): JSX.Element => (
            <IncompleteTasks tasks={dividedTasks.future} />
          )}
        />
        <Route
          path={RouteTypes.past}
          render={(): JSX.Element => (
            <CompletedTasks tasks={dividedTasks.completed} />
          )}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = (
  state: IStoreState,
  { filter }: IRenderTasksContainerProps
): { tasks: ITask[] } => {
  const sortedTasks = sortTasks(state.tasks);
  if (!filter) return { tasks: sortedTasks };
  const filteredTasks = filterTasks(sortedTasks, filter);
  return {
    tasks: filteredTasks
  };
};

export const TaskListContainer = connect(
  mapStateToProps,
  { addTasks }
)(_TaskListContainer);
