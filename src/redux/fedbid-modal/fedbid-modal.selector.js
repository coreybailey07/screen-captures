import { createSelector } from 'reselect';

const selectFedBidModal = state => state.fedbidModal;

export const selectFedBidModalItem = createSelector(
  [selectFedBidModal],
  fedbidModal => fedbidModal.itemModal
)
