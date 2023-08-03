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
import { useState, useEffect } from "react"
import axios from "axios"
function Main() {
    const [todoContent, setTodoContent] = useState("")
    const [todos, setTodos] = useState([])
    const createTodo = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://localhost:3001/todo", {
            content: todoContent
        }, {
            headers: {
                token: localStorage.getItem("authToken")
            }
        })
        console.log(result)
        setTodos([...todos, {
            content: todoContent
        }])
        setTodoContent("")
    }
    useEffect(() => {
        const getTodo = async () => {
            const response = await axios.get("http://localhost:3001/todo", {
                headers: {
                    token: localStorage.getItem("authToken")
                }
            })
            setTodos(response.data)
            console.log(response)
        }
        getTodo()
    }, [])
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
                {
                    todos.map(todo => {
                        return <TodoItem text={todo.content} />
                    })
                }

            </TodoContainer>
            <TodoInput onChange={e => setTodoContent(e.target.value)} value={todoContent}>
            </TodoInput>
            <TodoButton onClick={createTodo}>
                Add
            </TodoButton>
        </Container>
    )
}
export default Main