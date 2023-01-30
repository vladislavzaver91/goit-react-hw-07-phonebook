import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/contactsSlice';
import { filterSlice } from 'redux/filterSlice';

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});