import React from "react";
import { connect } from "react-redux";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

import TaskList from "../TaskList";
import { ActionBtn } from "../../ActionBtn/ActionBtn";
import { CompleteBtn } from "../../CompleteBtn/CompleteBtn";
import { EditBtn } from "../../EditBtn/EditBtn";
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

  const renderAction = (task: ITask) => {
    const handleShowModal = () => {
      showModal({
        modalType: ModalTypes.createTask,
        modalProps: { task }
      });
    };

    const handleComplete = () => {
      completeTask(task.id);
    };

    return (
      <>
        <ActionBtn handleAction={handleShowModal} icon={faEdit} />
        <ActionBtn handleAction={handleComplete} icon={faCheck} />
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
