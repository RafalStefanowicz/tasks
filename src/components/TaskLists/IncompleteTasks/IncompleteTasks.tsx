import React from "react";
import { connect } from "react-redux";

import TaskList from "../TaskList";
import { ITask } from "../../../reducers/tasks";
import { completeTask } from "../../../actions/completeTask";
import { showModal } from "../../../actions/showModal";
import { ModalTypes } from "../../../types/ModalTypes";

interface IncompleteTasksProps {
  tasks: ITask[];
  completeTask: typeof completeTask;
  showModal: typeof showModal;
}

const _IncompleteTasks = (props: IncompleteTasksProps): JSX.Element => {
  const { tasks, completeTask, showModal } = props;

  const renderDelete = (task: ITask) => {
    return (
      <button
        onClick={() => {
          showModal({
            modalType: ModalTypes.deleteTask,
            modalProps: { task: task }
          });
        }}
      >
        Delete
      </button>
    );
  };

  const renderAction = (task: ITask) => {
    return (
      <>
        <button
          onClick={() => {
            completeTask(task.id);
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            showModal({
              modalType: ModalTypes.createTask,
              modalProps: { task }
            });
          }}
        >
          Edit
        </button>
      </>
    );
  };

  return (
    <TaskList
      tasks={tasks}
      renderDelete={renderDelete}
      renderAction={renderAction}
    />
  );
};

export const IncompleteTasks = connect(
  null,
  { completeTask, showModal }
)(_IncompleteTasks);
