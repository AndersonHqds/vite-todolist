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
function Login(){
return(
    <Container>
        <Form>
            <LogoContainer>
            <LogoImg src={logo}/>
            </LogoContainer>
            <InputContainer>
            <Input/>
          
            <Input type="password"/>
            <Button>
             Entrar
            </Button>
            </InputContainer>
        </Form>
    </Container>
)

}
export default Login
