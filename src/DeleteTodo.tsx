import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import ShowTodo from "./ShowTodo";

interface IProps{
    todo: string[],
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
}

function DeleteTodo(props: IProps){
    const [numberUpdate, setNumberUpdate] = useState<number>();
    return (
        <>
            <h3>DELETE-TODO</h3>
            <form action="">
                <TextField id="filled-basic" label="Enter Todo number" variant="filled" type="number"  onChange={(e) => setNumberUpdate(parseInt(e.target.value))} required/><br />
                <Button color="primary" size="small" variant="contained" type="button" onClick={() => {
                    let deleteNumber: number = numberUpdate;
                    console.log(deleteNumber);
                    props.todo.splice((deleteNumber - 1), 1);
                    props.setTodo(props.todo);
                    alert('Great!!! one task done');
                }}>Submit</Button>
            </form>
        </>
    );
}

export default DeleteTodo;