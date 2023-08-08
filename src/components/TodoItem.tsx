import {
    Container


} from "./todoitem.style"

type Props = {
    text: String;
    onSelect: () => void;
    checked: boolean;
}

export default function TodoItem({ text, onSelect, checked }: Props) {
    return <Container>
        <input type="checkbox" checked={checked} onChange={onSelect}/>
        <label>{text}</label>
    </Container>
}