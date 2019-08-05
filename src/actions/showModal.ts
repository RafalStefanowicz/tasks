import { ActionTypes } from "../types/ActionTypes";

import { ModalType } from "../reducers/modal";

export interface ShowModalAction {
  type: ActionTypes.showModal;
  payload: ModalType;
}

export const showModal = ({
  modalType,
  modalProps
}: ModalType): ShowModalAction => ({
  type: ActionTypes.showModal,
  payload: { modalType, modalProps }
});
