import styled from 'styled-components';

export const Container = styled.div`
background:#9F7DFF;
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
`
export const Header = styled.header`
background:#B3E5FC;
width:100%;
height:78px;
display:flex;
align-items:center;
`
export const LogoImg = styled.img`
height:62px;
margin-left:18px;
`
export const Status = styled.select`
background:#FFFFFF;
width:20%;
height:27px;
margin-top:37px;
margin-left:31px;
`
export const TodoContainer = styled.div`
background-color:white;
width:95%;
height:320px;
align-self:center;
`
export const TodoInput = styled.input`
background:#FFFFFF;
width:95%;
height:36px;
align-self:center;
`
export const TodoButton = styled.button`
background:#B3E5FC;
width:20%;
height:32px;
align-self:center;
`