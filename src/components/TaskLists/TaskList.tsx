import React from "react";

import { ITask } from "../../reducers/tasks";

interface ITaskList {
  tasks: ITask[];
  renderAction?: (task: ITask) => JSX.Element;
  renderDelete?: (task: ITask) => JSX.Element;
}

const TaskList: React.FC<ITaskList> = (props): JSX.Element => {
  const { tasks, renderAction, renderDelete } = props;

  const tasksJSX = tasks.map(task => {
    return (
      <li key={task.id}>
        <span>{task.date}</span>
        <span>{`${task.priority} - zmien na gwiazdki`}</span>
        <div>
          {renderDelete && renderDelete(task)}
          <span>{task.description}</span>
          {renderAction && renderAction(task)}
        </div>
      </li>
    );
  });

  return <ul>{tasksJSX}</ul>;
};

export default TaskList;
