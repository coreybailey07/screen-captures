import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import portfolioReducer from './portfolio/portfolio.reducer';
import portfolioModalReducer from './portfolio-modal/portfolio-modal.reducer';
import b2buyReducer from './b2buy/b2buy.reducer';
import b2buyModalReducer from './b2buy-modal/b2buy-modal.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers ({
  portfolio: portfolioReducer,
  portfolioModal: portfolioModalReducer,
  b2buy: b2buyReducer,
  b2buyModal: b2buyModalReducer,
})

export default persistReducer(persistConfig, rootReducer);