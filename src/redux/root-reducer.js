import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import fedbidReducer from './fedbid/fedbid.reducer';
import fedbidModalReducer from './fedbid-modal/fedbid-modal.reducer';
import b2buyReducer from './b2buy/b2buy.reducer';
import b2buyModalReducer from './b2buy-modal/b2buy-modal.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers ({
  b2buy: b2buyReducer,
  b2buyModal: b2buyModalReducer,
  fedbid: fedbidReducer,
  fedbidModal: fedbidModalReducer,
})

export default persistReducer(persistConfig, rootReducer);