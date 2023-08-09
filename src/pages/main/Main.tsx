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
        //Disparado quando a página for aberta
        const getTodo = async () => {
            const response = await axios.get("http://localhost:3001/todo", {
                headers: {
                    token: localStorage.getItem("authToken")
                }
            })
            setTodos(response.data)
            //Todos que o backend devolveu
            console.log(response)
        }
        getTodo()
    }, [])

    const onCheckboxSelected= async (event, _id) => {
        console.log(_id);
        const isChecked = event.target.checked;
        await axios.patch("http://localhost:3001/todo", {
            status: isChecked,
            id: _id
        }, {
            headers: {
                token: localStorage.getItem("authToken")
            }
        })
        const todoChecked = todos.map(todo => {
            if(todo._id === _id) {
                return {
                    ...todo,
                    status: isChecked
                }
            }
            return todo;
        })
        setTodos(todoChecked)
    }
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
                        console.log(todo);
                        return <TodoItem onSelect={(event) => onCheckboxSelected(event, todo._id)} text={todo.content} checked={todo.status} key={todo._id}/>
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