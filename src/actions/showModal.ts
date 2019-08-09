import { ActionTypes } from "../types/ActionTypes";

import { IModal } from "../reducers/modal";

export interface IShowModalAction {
  type: ActionTypes.showModal;
  payload: IModal;
}

export const showModal = ({
  modalType,
  modalProps
}: IModal): IShowModalAction => ({
  type: ActionTypes.showModal,
  payload: { modalType, modalProps }
});
