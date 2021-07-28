import { createSelector } from 'reselect';

const selectFedBid = state => state.fedbid;

export const selectFedBidItem = createSelector(
  [selectFedBid],
  fedbid => fedbid.item
)
