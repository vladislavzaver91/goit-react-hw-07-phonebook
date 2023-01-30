import React from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector  } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { FormBox, FormContacts, FormTitle, SearchInput, BtnSubmit } from './ContactForm.styled';

const initialValues = {
    name: '',
    number: '',
    };


export const ContactForm = () => {
    const dispatch = useDispatch();
    const contactList = useSelector(state => state.contacts.item);

    return (
        <FormBox>
            <Formik initialValues={initialValues}
            onSubmit={(values, actions) => {
                const findedContact = contactList.find(contact =>
                    contact.name.toLowerCase().includes(values.name.toLowerCase()));

                    if (findedContact) {
                        toast(`${findedContact.name} is already in contacts!`, {
                            position: 'top-right',
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        });;
                        actions.resetForm();
                        return;
                    } else {
                        toast(`${findedContact.name} was successfully added!`, {
                            position: 'top-right',
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        });;
                        dispatch(addContact(values, actions));
                        actions.resetForm();
                    };
            }}>
            <FormContacts>
                <FormTitle> Name
                    <SearchInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </FormTitle>
                <FormTitle> Number
                    <SearchInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormTitle>
                <BtnSubmit type="submit">Add contacts</BtnSubmit>
            </FormContacts>
            </Formik>
            </FormBox>
    )
}
