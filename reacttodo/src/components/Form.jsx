import { useState } from "react";
import styles from './form.module.css';


const Form = ({tasks,setTasks}) => {

    const [todoItem,setTodoItem] = useState({task:"",date:"",time:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks,todoItem]);
        setTodoItem({task:"",date:"",time:""})

    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.input} type="text" value={todoItem.task} onChange={(e)=>setTodoItem({...todoItem,task:e.target.value})} />
                <input className={styles.input} type="date" value={todoItem.date} onChange={(e)=>setTodoItem({...todoItem,date:e.target.value})} />
                <input className={styles.input} type="time" value={todoItem.time} onChange={(e)=>setTodoItem({...todoItem,time:e.target.value})} />
                <button className={styles.button} type="submit">Add</button>
            </form>
            
        </div>
    );
}

export default Form;