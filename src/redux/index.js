import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

//
import rootReducer from './features';
import { mijneetApi } from './features/api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: [mijneetApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [mijneetApi.middleware];

if (__DEV__) {
  middlewares = [...middlewares, logger];
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);
