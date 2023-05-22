import React from "react";
import PropTypes from 'prop-types';
import { DeleteBtn, Item, Name, Number } from "./contactsItem.styled";

const ContactsItem = ({ contacts, onDelete }) => {
    return contacts.map(({id, name, number}) => (
                <Item key={id}>
                    <Name>{name}: </Name>
                    <Number>{number}</Number>
                    <DeleteBtn onClick={() => onDelete(id)} type='button'>Delete</DeleteBtn>
                </Item>
            ))
}

export default ContactsItem;

ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
    ).isRequired,
};