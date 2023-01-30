import axios from 'axios';

axios.defaults.baseURL = 'https://63d7f4de5c4274b136ff17ac.mockapi.io/api/v1/';

export const getContacts = async () => {
    const contacts = await axios.get('/contacts');
    return contacts.data;
};

export const addNewContact = async data => {
    const contact = await axios.post('/contacts', data);
    return contact.data;
};

export const delContactById = async id => {
    const contact = await axios.delete(`/contacts/${id}`);
    return contact.data;
};