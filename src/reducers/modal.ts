import { ActionTypes, Action } from "../types/ActionTypes";
import { ModalTypes } from "../types/ModalTypes";
import { ITask } from "./tasks";

export const INITIAL_MODAL_STATE = {
  modalType: ModalTypes.initial,
  modalProps: {}
};

export interface IModal {
  modalType: ModalTypes;
  modalProps: any;
}

export const modal = (
  state: IModal = INITIAL_MODAL_STATE,
  action: Action
): IModal => {
  switch (action.type) {
    case ActionTypes.showModal:
      return action.payload;

    case ActionTypes.hideModal:
      return INITIAL_MODAL_STATE;

    default:
      return state;
  }
};
