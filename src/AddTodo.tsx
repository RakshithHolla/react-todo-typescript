import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

interface IProps{
    todo: string[],
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
}

function AddTodo(props: IProps){
    const [addTodo, setaddTodo] = useState('');
    return (
        <>
            <h3>ADD-TODO</h3>
            <form action="">
                <TextField id="filled-basic" label="Add Todo" variant="filled" type="text" onChange={(e) => setaddTodo(e.target.value)} required/><br />
                <Button color="primary" size="small" variant="contained" type="button" onClick={() => {
                    let newTodo: string = addTodo;
                    console.log(newTodo);
                    props.todo.push(newTodo);
                    props.setTodo(props.todo);
                    alert('To do added successfully!!!');
                }}>Add Todo</Button>
            </form>
        </>
    );
}

export default AddTodo;

