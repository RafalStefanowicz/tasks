import { ActionTypes, Action } from "../types/ActionTypes";
import { ModalTypes } from "../types/ModalTypes";

export const INITIAL_MODAL_STATE = {
  modalType: ModalTypes.initial,
  modalProps: {}
};

export interface ModalType {
  modalType: ModalTypes;
  modalProps: {
    id?: number;
  };
}

export const modal = (
  state: ModalType = INITIAL_MODAL_STATE,
  action: Action
): ModalType => {
  switch (action.type) {
    case ActionTypes.showModal:
      return action.payload;
    case ActionTypes.hideModal:
      return INITIAL_MODAL_STATE;
    default:
      return state;
  }
};
