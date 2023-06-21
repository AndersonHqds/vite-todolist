import styled from 'styled-components';

export const Container = styled.div`
background:#9F7DFF;
height:100vh;
width:100%;
display:flex;
justify-content: center;
align-items:center;
`
export const Form = styled.form`
width:311px;
height:390px;
background:white;
`
export const Input = styled.input` 
background: #D9D9D9;
width:80%;
height:38px;
border:none;
`
export const Button = styled.button`
background:#6E3EF7;
width:40%;
height:30px;
color:white;
position: relative;
bottom:10px;
&:disabled {
    opacity: 0.5;
}
`
export const LogoContainer = styled.div`
width:100%;
height:40%;
display:flex;
justify-content:center;
align-items:center;
`
export const LogoImg = styled.img`
height:62px;
`
export const InputContainer = styled.div`
height:60%;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
export const PasswordDoesNotMatchMessage = styled.span `
color: red; 
` 
