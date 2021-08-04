interface IProps{
    todo: string[]
}

function ShowTodo(props: IProps){
    console.log(props.todo);
    return (
        <>
            <h3>SHOW-TODO</h3>
            <ol>
                {props.todo.map(element => <li>{ element }</li>)}
            </ol>
        </>
    );
}

export default ShowTodo;