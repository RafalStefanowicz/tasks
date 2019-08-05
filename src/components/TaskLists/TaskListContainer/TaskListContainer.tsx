import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { CompletedTasks } from "../CompletedTasks/CompletedTasks";
import { IncompleteTasks } from "../IncompleteTasks/IncompleteTasks";
import { addTasks } from "../../../actions/addTasks";
import { StoreState } from "../../../reducers/reducers";
import { dateIsToday } from "../../../helpers/helpers";
import { TaskType } from "../../../reducers/tasks";
import { RouteTypes } from "../../../types/RouteTypes";

interface DividedTasksType {
  completed: TaskType[];
  today: TaskType[];
  future: TaskType[];
}

interface TaskListContainerProps {
  tasks: TaskType[];
  addTasks: typeof addTasks;
}

const _TaskListContainer = (props: TaskListContainerProps): JSX.Element => {
  const { tasks, addTasks } = props;

  useEffect(() => {
    const tasksString = localStorage.getItem("tasks");
    if (tasksString) {
      const tasksArray: TaskType[] = JSON.parse(tasksString);
      if (Array.isArray(tasksArray)) {
        addTasks(tasksArray);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const dividedTasks: DividedTasksType = {
    completed: [],
    today: [],
    future: []
  };

  tasks.forEach(task => {
    if (task.completed) {
      dividedTasks.completed.push(task);
    } else if (dateIsToday(task.date)) {
      dividedTasks.today.push(task);
    } else {
      dividedTasks.future.push(task);
    }
  });

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
        path={RouteTypes.future}
        render={(): JSX.Element => (
          <CompletedTasks tasks={dividedTasks.completed} />
        )}
      />
    </Switch>
  );
};

const mapStateToProps = (state: StoreState): { tasks: TaskType[] } => ({
  tasks: state.tasks
});

export const TaskListContainer = connect(
  mapStateToProps,
  { addTasks }
)(_TaskListContainer);
