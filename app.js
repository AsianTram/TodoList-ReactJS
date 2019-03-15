class Header extends React.Component{
   constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3 id="header">TODO LIST</h3>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"id ="total">Total: {this.props.count}</div>
                    <div className="col-sm-3" id="add" ><button className="w3-button w3-large w3-circle w3-purple" onClick={this.props.addItems}>+</button></div>
                    <div className="col-sm-3"></div>
                    </div>
                
            </div>
        )
    }
}
class Todo extends React.Component{
    render(){
        return(
            <div className="todo">

                <div className="row">
                    <div className="col-sm-6" ><textarea id="name" defaultValue={this.props.todo} onChange={(e)=>this.props.changeTodoName(this.props.id, e)} /></div>
                    <div className="col-sm-2" id="modified"><i>MODIFIED</i></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2" id="delete" onClick={()=>this.props.removeItem(this.props.id)}>X</div>
                    </div>
                
                
                {/* <div id="delete" onClick={()=>this.props.removeItem(this.props.id)}>X</div> */}
            </div>
        )
    }
}

class App extends React.Component{
    state={todos:[{name:"Clean the house", id:1},{name:"Go to school", id:2} ]};
    // use arrow function to bind data
    addItems=()=>{
        //  this.setState(prevState=>({todo: prevState.todos.push({name:"", id:prevState.todos[prevState.todos.length-1].id+1})}));
        if(this.state.todos.length!=0)
        {
            this.setState(prevState=>{ 
                prevState.todos.push({name:"", id:prevState.todos[prevState.todos.length-1].id+1})
                return prevState
                
            });
        }
        else{
            this.setState(prevState=>{ 
                prevState.todos.push({name:"", id:0})
                return prevState
                
            });
        }
        
        
        
    }
    removeItem=(id)=>{
        console.log("Remove "+id);
        this.setState(prevState=>{return {todos: prevState.todos.filter(t=>t.id!==id)}});
    }

    changeTodoName=(id, evt)=>{

        let copyArray= JSON.parse(JSON.stringify(this.state.todos));
        ;
        for(var i=0;i<copyArray.length;i++){
            if(copyArray[i].id==id){
                copyArray[i].name=evt.target.value;
            }
        }
        

        this.setState({todos: copyArray});
        $(evt.target).parent().parent().find('#modified').css({"display":"block"});
    }
    render(){
        return(
            <div className="app">
                <Header count={this.state.todos.length} addItems={this.addItems}/>
                {this.state.todos.map((todo)=><Todo todo ={todo.name} id={todo.id} key={todo.id.toString()} removeItem={this.removeItem} changeTodoName={this.changeTodoName}/>)}
                
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));