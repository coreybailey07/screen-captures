import { createSelector } from 'reselect';

const selectVAO = state => state.vao;

export const selectVAOItem = createSelector(
  [selectVAO],
  vao => vao.item
)
