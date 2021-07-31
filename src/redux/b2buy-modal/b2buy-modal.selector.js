import { createSelector } from 'reselect';

const selectB2BuyModal = state => state.b2buyModal;

export const selectB2BuyModalItem = createSelector(
  [selectB2BuyModal],
  b2buyModal => b2buyModal.itemModal
)
