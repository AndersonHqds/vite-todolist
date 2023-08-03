import {
    Container


} from "./todoitem.style"

type Props = {
    text: String;
    onSelect?: () => void;
}

export default function TodoItem({ text, onSelect }: Props) {
    return <Container>
        <input type="checkbox" />
        <label>{text}</label>
    </Container>
}