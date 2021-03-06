import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { ShoppingBag } from '@styled-icons/boxicons-regular';

export const Logo = styled.h1`
grid-area: 1 / 1 / 2 / 2;
margin-top:-5%;
letter-spacing:0.1rem;
font:2.5rem/1 Avenir Book,sans-serif;
font-weight:bold;
color:#f23645;
`;
export const Input = styled.div`
grid-area: 1 / 3 / 2 / 4;
justify-self:end;
width:80%;
border:1px solid black;
margin-top:-8%;
padding:5px;
border: 1px solid #DFDFDF;
text-align: left;
height:35px;
`;

export const InputSearch = styled.input`
width:80%;
border:1px solid white;
&:focus{
    outline: none;  
}
&::-webkit-input-placeholder {
    color:#4b5666;
letter-spacing:.06rem;
font: 1rem/normal Avenir Book,sans-serif;
  }
`;

export const SearchIcon = styled(Search)`
color:#167a92;
height:25px;
margin:0 5px;
`;

export const ShoppingCart = styled.div`
grid-area: 1 / 4 / 2 / 5; 
cursor:pointer;


`;
export const Cart = styled(ShoppingBag)`
height:30px;
color:#167a92;
margin-top:-26%;
`;

export const QuanityTag = styled.div`
display: inline-block;
height:20px;
margin-top:-36%;
width:20px;
border-radius:50%;
color:white;
background-color:#167a92;
border:1px solid #167a92;
margin-left:-15px;
text-align:center;
vertical-align: middle;
transition:1s ease;
font:Avenir medium, sans-serif;
`;
