import {
    Container,
    Form,
    Input,
    Button,
    LogoContainer,
    LogoImg,
    InputContainer,
    PasswordDoesNotMatchMessage
} from "./style";
import logo from "../../assets/logo.png"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onSubmit = (event: any) => {
        event.preventDefault()
        axios.post("http://localhost:3001/signup", {
            username: username,
            password: password
        })
    }

    function isThePasswordsMatch() {
        return password === confirmPassword;
    }

    const isButtonDisabled = () => {
        const usernameLength = username.trim().length;
        const passwordLength = password.trim().length;
        const confirmPasswordLength = confirmPassword.trim().length;
        if (usernameLength === 0 || passwordLength === 0 || confirmPasswordLength === 0 || !isThePasswordsMatch()) {
            return true;
        } 
        return false;
        
    }

    return (
        <Container>
            <Form>
                <LogoContainer>
                    <LogoImg src={logo} />
                </LogoContainer>
                <InputContainer>
                    <Input placeholder="Username" onChange={event => setUsername(event.target.value)} />

                    <Input placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} />
                    <Input placeholder="Confirm your password" type="password" onChange={event => setConfirmPassword(event.target.value)} />
                    { !isThePasswordsMatch() && <PasswordDoesNotMatchMessage>Password does not match</PasswordDoesNotMatchMessage>}
                    <Button disabled={ isButtonDisabled() }
                    onClick={onSubmit}>

                        Sign Up
                    </Button>
                </InputContainer>
            </Form>

            <Link to="/login">Navegar para Login</Link>
        </Container>
    )

}
export default SignUp
