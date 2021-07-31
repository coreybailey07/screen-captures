import { createSelector } from 'reselect';

const selectVAOModal = state => state.vaoModal;

export const selectVAOModalItem = createSelector(
  [selectVAOModal],
  vaoModal => vaoModal.itemModal
)
