import ContactsItem from 'components/ContactsItem/contactsItem';
import PropTypes from 'prop-types';
import { List } from './contactsList.styled';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            <ContactsItem contacts={contacts} onDelete={onDelete}/>
        </List>
    )
}
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,

}