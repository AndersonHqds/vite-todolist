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
function SignUp() {
    return (
        <Container>
            <Form>
                <LogoContainer>
                    <LogoImg src={logo} />
                </LogoContainer>
                <InputContainer>
                    <Input placeholder="Username" />

                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm your password" type="password" />
                    <Button>
                        Sign Up
                    </Button>
                </InputContainer>
            </Form>
        </Container>
    )

}
export default SignUp
