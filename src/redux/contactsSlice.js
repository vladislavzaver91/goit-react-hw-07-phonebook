import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts, addContact, delContact } from "./contactsOperations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchContacts.fulfilled]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                items: action.payload,
            };
        },

        [fetchContacts.pending]: state => {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        },

        [fetchContacts.rejected]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },

        [addContact.pending]: state => {
            return {
                ...state,
                isLoading: true,
            };
        },

        [addContact.fulfilled]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                items: [...state.items, action.payload],
                error: null,
            };
        },

        [addContact.rejected]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },

        [delContact.pending]: state => {
            return {
                ...state,
                isLoading: true,
            };
        },

        [delContact.fulfilled]: (state, action) => {
            return {
                items: state.items.filter(({ id }) => id !== action.payload.id),
                isLoading: false,
                error: null,
            };
        },

        [delContact.rejected]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
    },
});
    // reducers: {
    //     addContact(state, action) {
    //         const id = nanoid(10);
    //         const { name, number } = action.payload;
    //         const normalizedName = name.toLowerCase(); 
    //         const findedContact = state.find(contact => contact.name.toLowerCase().includes(normalizedName)); 
            
    //         if (findedContact) {
    //             toast.info(`${findedContact.name} is already in contacts`)
    //         } else {
    //             return([...state, { id, name, number }]);
    //         };
    //     },

    //     deleteContact(state, action) {
    //         return state.filter(({ id }) => id !== action.payload);
    //     },
    //     },
    // });

    // export const { addContact, deleteContact } = contactsSlice.actions;