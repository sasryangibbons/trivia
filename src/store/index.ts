import { configureStore } from '@reduxjs/toolkit';

import quizReducer from './quizgame'




const store = configureStore({
    reducer: { quiz: quizReducer },
});

export type RootState = ReturnType<typeof store.getState>

export const dispatchStore = store.dispatch as typeof store.dispatch

export default store;
