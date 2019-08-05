import { ActionTypes } from "../types/ActionTypes";

export interface HideModalAction {
  type: ActionTypes.hideModal;
}

export const hideModal = (): HideModalAction => ({
  type: ActionTypes.hideModal
});
