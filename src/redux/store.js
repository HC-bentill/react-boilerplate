import userReducer from "./user/userSlice";
import appReducer from "./app/appSlice";
import {combineReducers} from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {configureStore} from "@reduxjs/toolkit";

// The key specifies the ID of the persist object and the storage determines the type of storage being used.
const persistConfig = {
  key: "root",
  storage: storage,
};

// Combine all the reducers from slices in your app
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

// Create a persistent reducer 1st arg: config for persist reducer. 2nd arg: combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
