import { useState } from "react";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const TODOOPS = ["AddTodo", "ShowTodo", "UpdateTodo", "DeleteTodo"];

function TodosApi(){

    const [activeTab, setActiveTab] = useState(TODOOPS[1]);
    const [todo, setTodo] = useState([]);
    
    return (
        <>
            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
            {TODOOPS.map(ops => (
                <Button onClick={() => setActiveTab(ops)}>{ ops }</Button>
            ))}
            </ButtonGroup>
            <h1>TO-DO-APP</h1>
            {renderPage(activeTab, todo, setTodo)}
        </>
    );
}

function renderPage(activeTab: string, todo: string[], setTodo: React.Dispatch<React.SetStateAction<any[]>>){
    switch(activeTab){
        case TODOOPS[0] : return <AddTodo todo={todo} setTodo={setTodo} />;
        case TODOOPS[1] : return <ShowTodo todo={todo} />;
        case TODOOPS[2] : return <UpdateTodo todo={todo} setTodo={setTodo} />;
        case TODOOPS[3] : return <DeleteTodo todo={todo} setTodo={setTodo} />;
    }
}

export default TodosApi;