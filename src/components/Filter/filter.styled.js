import  styled from "styled-components";


export const Div = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
margin-bottom: 40px;
`
export const Input = styled.input`
width: 250px;
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
    border-color: #6ef07a;
    box-shadow: 0 0 5px rgba(0, 240, 0, 0.3);
  }
`

export const FilterLabel = styled.label`
font-weight: 600;
font-size: 20px;
`