import { useState } from "react";

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {

        console.log("submitted")

        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10),
            })
        })

        setInput("")
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className="container">
            <input type="text" value={input} placeholder="New Todo" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {todos.map((todo, id) => (
                    <li key={todo.id} className="todo">
                        <span>{todo.text}</span>
                        <button className="close" onClick={() => removeTodo(todo.id)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Todo;