import { ActionTypes } from "../types/ActionTypes";

import { IModal } from "../reducers/modal";

export interface ShowModalAction {
  type: ActionTypes.showModal;
  payload: IModal;
}

export const showModal = ({
  modalType,
  modalProps
}: IModal): ShowModalAction => ({
  type: ActionTypes.showModal,
  payload: { modalType, modalProps }
});
