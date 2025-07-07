import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { persistStore } from "redux-persist"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist/es/constants"
import sheAppReducer from "./root-reducer"

const isDevelopment = process.env.REACT_APP_ENV === "development"

const store = configureStore({
  reducer: {
    app: sheAppReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(isDevelopment ? logger : logger),
  // Add preloadedState handling
  preloadedState: {
    app: {
      userMngmt: {
        isAuthenticated: Boolean(localStorage.getItem("accessToken"))
      }
    }
  }
})

const persistor = persistStore(store)

export { persistor, store }
