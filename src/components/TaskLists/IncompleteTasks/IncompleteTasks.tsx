import React from "react";
import { connect } from "react-redux";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

import TaskList from "../TaskList/TaskList";
import { ActionBtn } from "../../ActionBtn/ActionBtn";
import { ITask } from "../../../reducers/tasks";
import { completeTask } from "../../../actions/completeTask";
import { showModal } from "../../../actions/showModal";
import { ModalTypes } from "../../../types/ModalTypes";

interface IIncompleteTasksProps {
  tasks: ITask[];
  completeTask: typeof completeTask;
  showModal: typeof showModal;
}

const _IncompleteTasks = (props: IIncompleteTasksProps): JSX.Element => {
  const { tasks, completeTask, showModal } = props;

  const renderDelete = (task: ITask) => {
    const handleDelete = () => {
      showModal({
        modalType: ModalTypes.deleteTask,
        modalProps: { task: task }
      });
    };

    return <ActionBtn handleAction={handleDelete} icon={faTrash} />;
  };

  const renderEdit = (task: ITask) => {
    const handleShowModal = () => {
      showModal({
        modalType: ModalTypes.createTask,
        modalProps: { task }
      });
    };
    return <ActionBtn handleAction={handleShowModal} icon={faEdit} />;
  };

  const renderComplete = (task: ITask) => {
    const handleComplete = () => {
      completeTask(task.id);
    };
    return <ActionBtn handleAction={handleComplete} icon={faCheck} />;
  };

  return (
    <TaskList
      tasks={tasks}
      renderDelete={renderDelete}
      renderEdit={renderEdit}
      renderComplete={renderComplete}
    />
  );
};

export const IncompleteTasks = connect(
  null,
  { completeTask, showModal }
)(_IncompleteTasks);
