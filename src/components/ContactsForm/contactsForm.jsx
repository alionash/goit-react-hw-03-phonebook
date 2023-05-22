import React from "react";
import { Formik } from 'formik';
import { Form, FormLabel, Field, ErrorMessage, Button } from "./contactsForm.styled";
import { ContactSchema} from "components/Utils/validate";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export const ContactsForm = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={ContactSchema}

            onSubmit={(values, actions) => {
                onSubmit({ ...values, id: nanoid() }, {actions})
                actions.resetForm();
            }}>
            

            <Form>
                <FormLabel>
                    Name
                <Field
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    <ErrorMessage name="name" component="div"/>
                </FormLabel>
                <FormLabel>
                    Number
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <ErrorMessage name="number" component="div"/>
                </FormLabel>
                <Button type="submit">Add to contacts</Button>
        </Form>
    </Formik>
    )
}

ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}