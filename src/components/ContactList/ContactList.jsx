import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { FriendList, ContactItem, Friend, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
    const contactList = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
        <FriendList>{filteredContacts.map(({id, name, number}) => (
            <ContactItem key={id}>
                <Friend>{name}: {number}</Friend>
                <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>Delete</BtnDelete>
            </ContactItem>
        ))}
        </FriendList>
    )
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};