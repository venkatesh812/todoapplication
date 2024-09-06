import { useState } from 'react';
import styles from './todoitem.module.css';


const TodoItem = ({task,tasks,setTasks}) => {

    const [isDone,setIsDone] = useState(false);

    const handleDelete = (task) => {
        setTasks(tasks.filter((todo) => todo !== task));
    }

    const handleDone = () => {
        setIsDone(!isDone);
    }


    return (
        <div className={styles.item}>
            <h3 className={isDone?styles.doneTask:""}>Task: {task.task}</h3>
            <h3 className={isDone?styles.doneTask:""}>Date: {task.date}</h3>
            <h3 className={isDone?styles.doneTask:""}>Time: {task.time}</h3>
            <div className={styles.buttons}>
                <button onClick={handleDone} className={isDone?styles.undone:styles.done}>{isDone?"Undone":"Mark as Done"}</button>
                <button className={styles.delete} onClick={() => handleDelete(task)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;