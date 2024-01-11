import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice'; 
import competitorReducer from './features/modal/competitors/competitorSlice';


export const store = configureStore({
    reducer: {
        modal: modalReducer,
        competitor: competitorReducer

    }
});