import { createSelector } from 'reselect';

const selectB2Buy = state => state.b2buy;

export const selectB2BuyItem = createSelector(
  [selectB2Buy],
  b2buy => b2buy.item
)
