interface IProps {
    name: string
    age: number
    info: {
        name: string
        age: number
    }
    abc?: string
}

const InputTodo = (props: IProps) => {

    return (
        <div>
            <div>name: {props.name}</div>
            <div>add New Todo</div>
            <input name="todo" type="text"/>
            <button>Save</button>
        </div>
    );
}

export default InputTodo;