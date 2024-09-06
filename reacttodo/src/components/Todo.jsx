import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

const Todo = () => {

    const [tasks,setTasks] = useState([]);

    return (
        <div>
            <Form tasks={tasks} setTasks={setTasks} />
            <TodoList tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default Todo;