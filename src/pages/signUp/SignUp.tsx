import {
    Container,
    Form,
    Input,
    Button,
    LogoContainer,
    LogoImg,
    InputContainer
} from "./style";
import logo from "../../assets/logo.png"
import { useState } from "react"
import axios from "axios"
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
                    <Button disabled={username.length === 0 || password.length === 0 || confirmPassword.length === 0}
                    onClick={onSubmit}>

                        Sign Up
                    </Button>
                </InputContainer>
            </Form>
        </Container>
    )

}
export default SignUp
