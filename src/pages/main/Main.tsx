import {

    Container,
    Header,
    LogoImg,
    Status,
    TodoContainer,
    TodoInput,
    TodoButton
} from "./style";
import logo from "../../assets/logo.png"
import TodoItem from "../../components/TodoItem";
function Main() {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} />
            </Header>
            <Status>
                <option value="completos">Completos</option>
                <option value="incompletos">Incompletos</option>
                <option value="todos">Todos</option>
            </Status>
            <TodoContainer>
                <TodoItem text="Passar pano na casa" />
                <TodoItem text="Lavar Louça"/>

            </TodoContainer>
            <TodoInput>
            </TodoInput>
            <TodoButton>
                Add
            </TodoButton>
        </Container>
    )
}
export default Main