import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField/TextField";
import { useState } from "react";
import ShowTodo from "./ShowTodo";

interface IProps{
    todo: string[],
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
}

function UpdateTodo(props: IProps){
    const [numberUpdate, setNumberUpdate] = useState<number>();
    const [textUpdate, setTextUpdate] = useState('');
    return (
        <>  
            <h3>UPDATE-TODO</h3>
            <form action="">
                <TextField id="filled-basic" label="Enter Todo number" variant="filled" type="number"  onChange={(e) => setNumberUpdate(parseInt(e.target.value))} required /><br />
                <TextField id="filled-basic" label="Add updated Todo" variant="filled" type="text"  onChange={(e) => setTextUpdate(e.target.value)} required /><br />
                <Button color="primary" size="small" variant="contained" type="button" onClick={() => {
                    let updateNumber: number = numberUpdate;
                    console.log(updateNumber);
                    let updatedString: string = textUpdate;
                    console.log(updatedString);
                    props.todo[updateNumber - 1] = updatedString;
                    props.setTodo(props.todo);
                    alert('To do updated!!!');
                }}>Submit</Button>
            </form>
        </>
    );
}

export default UpdateTodo;