import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

const TodoList = ({tasks,setTasks}) => {
    return (
        <div className={styles.tasks}>
            {tasks.map((task,index) => (
            <TodoItem key={index} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>  
    );
}
export default TodoList;