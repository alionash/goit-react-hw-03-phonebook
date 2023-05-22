import styled from "styled-components";

export const Item = styled.li`
display: flex;
margin-bottom: 20px;
align-items: center;
justify-content: space-between;
&:last-child {
    margin-bottom: 0;
  }
`
export const Name = styled.span`
font-weight: 500;
font-size: 18px;
`
export const Number = styled.span`
font-weight: 500;
font-size: 18px;
color: #979696;
`

export const DeleteBtn = styled.button`
width: 100px;
background-color: #e66a6a; 
color: white; 
padding: 10px 20px; 
border: none; 
transition: transform 0.3s; 

&:hover{
transform: scale(1.1);
}
`