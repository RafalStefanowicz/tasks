import { ActionTypes } from "../types/ActionTypes";

export interface IHideModalAction {
  type: ActionTypes.hideModal;
}

export const hideModal = (): IHideModalAction => ({
  type: ActionTypes.hideModal
});
