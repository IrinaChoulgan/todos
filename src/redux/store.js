import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './todos/todos-reducer';
import { 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

// const persistor = persistStore(store);


export default store;
