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

interface ITaskListContainerProps {
  tasks: ITask[];
  addTasks: typeof addTasks;
  filter: string;
}

const _TaskListContainer = (props: ITaskListContainerProps): JSX.Element => {
  const { tasks, addTasks, filter } = props;
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

  const filteredTasks = filterTasks(tasks, filter);
  const sortedTasks = sortTasks(filteredTasks);
  const dividedTasks = divideTasks(sortedTasks);

  if (!tasks.length) return <></>;
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
            <span>
              <IncompleteTasks tasks={dividedTasks.future} />
            </span>
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

const mapStateToProps = (state: IStoreState): { tasks: ITask[] } => ({
  tasks: state.tasks
});

export const TaskListContainer = connect(
  mapStateToProps,
  { addTasks }
)(_TaskListContainer);
