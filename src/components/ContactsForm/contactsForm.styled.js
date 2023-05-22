import  styled from "styled-components";
import { Form as FormikForm, Field as FormikField, ErrorMessage as ErrorMessageFormik } from 'formik';

export const Form = styled(FormikForm)`
padding: 8px;
border: 1px solid;
border-color: #a8e66a;
border-radius: 4px;
box-shadow: 0 0 5px rgba(0, 240, 0, 0.3);

display: flex;
flex-direction: column;
margin: 0 auto;
gap: 12px;
`

export const Field = styled(FormikField)`
width: 300px;
margin: 0 auto;
margin-top: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  
  &:hover {
    border-color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #a8e66a;
    box-shadow: 0 0 5px rgba(0, 240, 0, 0.3);
  }
`

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
font-weight: 600;
font-size: 18px;
margin: 0 auto;
margin-bottom: 8px;
`
export const ErrorMessage = styled(ErrorMessageFormik)`
font-size: 14px;
color: red;
`

export const Button = styled.button`
width: 200px;
background-color: #a8e66a; 
color: white; 
padding: 10px 20px; 
border: none; 
margin: 0 auto;
transition: transform 0.3s; 
cursor: pointer;

&:hover{
transform: scale(1.1);
}
`


