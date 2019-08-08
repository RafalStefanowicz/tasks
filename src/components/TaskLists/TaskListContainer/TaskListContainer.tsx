import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { CompletedTasks } from "../CompletedTasks/CompletedTasks";
import { IncompleteTasks } from "../IncompleteTasks/IncompleteTasks";
import { addTasks } from "../../../actions/addTasks";
import { StoreState } from "../../../reducers/reducers";
import { divideTasks } from "../../../helpers/helpers";
import { ITask } from "../../../reducers/tasks";
import { RouteTypes } from "../../../types/RouteTypes";

interface TaskListContainerProps {
  tasks: ITask[];
  addTasks: typeof addTasks;
}

const _TaskListContainer = (props: TaskListContainerProps): JSX.Element => {
  const { tasks, addTasks } = props;
  const isInitialMount = useRef(true);
  useEffect(() => {
    const tasksJson = localStorage.getItem("tasks");
    if (tasksJson) {
      const tasks: ITask[] = JSON.parse(tasksJson);
      addTasks(tasks);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const dividedTasks = divideTasks(tasks);
  return (
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
  );
};

const mapStateToProps = (state: StoreState): { tasks: ITask[] } => ({
  tasks: state.tasks
});

export const TaskListContainer = connect(
  mapStateToProps,
  { addTasks }
)(_TaskListContainer);
