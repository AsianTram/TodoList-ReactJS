class Header extends React.Component{
   
    
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3 id="header">TODO LIST</h3>
                <p id ="total">Total: {this.props.count}</p>
                <p id="add" onClick={this.props.addItems}>+Add new</p>
            </div>
        )
    }
}
class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="todo">
                <textarea id="name">{this.props.todo}</textarea>
                <div id="delete" onClick={this.props.removeItem}>X</div>
            </div>
        )
    }
}
// class TodoList extends React.Component{
//     // constructor(props){
//     //     super(props);
//     // }
//     todoList=this.props.todos.map((todo)=>
//     <Todo todo ={todo} key={todo.id.toString()} removeItem={this.props.removeItem}/>)
    
//     render(){
//         return(
//            this.todoList
//         )
//     }
    
// }
class App extends React.Component{
    state={todos:["Clean the house","Go to school"]};
    // use arrow function to bind data
    addItems=()=>{
        this.setState(prevState=>( {todos: prevState.todos.push("")}));
        //console.log(this.state.todos.length);
        
    }
    removeItem=()=>{
        this.setState(prevState=>( {todos: prevState.todos.pop()}));
    }
 
    render(){
        return(
            <div>
                <Header count={this.state.todos.length} addItems={this.addItems}/>
                {/* <TodoList todos ={this.state.todos} removeItem={this.removeItem}/> */}
            
                {this.state.todos.map((todo)=>{return (<Todo todo ={todo} removeItem={this.removeItem}/>)}
        )}
                
                
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));