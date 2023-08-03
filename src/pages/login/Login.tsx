import {
    Container,
    Form,
    Input,
    Button,
    LogoContainer,
    LogoImg,
    InputContainer,
    ErrorMessage
} from "./style";
import logo from "../../assets/logo.png"
import { useEffect, useState } from 'react';
import axios from "axios";
function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    useEffect(() => {
        setError("")

    }, [username, password])


    const onSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const token = await axios.post("http://localhost:3001/login", {
                username: username,
                password: password
            });
            console.log(token.data.token);
            localStorage.setItem('authToken', token.data.token);
        }
        catch (error) {
            setError(error.response.data)
            console.log(error.response.data);
        }

    }

    const isButtonDisabled = () => {
        const usernameLength = username.trim().length;
        const passwordLength = password.trim().length;
        if (usernameLength === 0 || passwordLength === 0) {
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
                    {error.length > 0 && <ErrorMessage>{error}</ErrorMessage>}
                    <Button disabled={isButtonDisabled()}
                        onClick={onSubmit}>
                        Login
                    </Button>
                </InputContainer>
            </Form>
        </Container>
    )

}
export default Login
