import { Component } from "react";

class Todo extends Component{
    
    state = {
        todos: ["eat apple", "eat banana"],
        newFruit: "eat pineapple",
        newFruit2: "eat pineapple",
      };
      addfruit=()=>{
        this.setState({
            
        
        todos:[...this.state.todos,this.state.newFruit]
        
        })
      }
    
    delfruit = (index) => {
        const newList = this.state.todos.filter((each, i) => {
          return index !== i;
        });
    
        this.setState({
          todos: newList,
        });
      };
      
    updfruit=(index)=>{
        const upd='grapes'
        const updatedtodos=this.state.todos.map((eachitem,i)=>{
            if(index==i){
                return upd
            }
            else{
                return eachitem
            }

        }
        )
        this.setState({
            todos:updatedtodos,
        })
    }




    render(){
        return(
            <>
            <button onClick={this.addfruit}>addnew fruits</button>
            <ol>
            {
                this.state.todos.map((eachitem,index)=>{
                    
                    return (
                    <>
                    
                    <li>{eachitem}</li>
                    <button onClick={()=>this.delfruit(index)}>deletefruits</button>
                    <button onClick={()=>this.updfruit(index)}>updatefruits</button>
                    
                    </>
                    )
                    
                })
            }
            </ol>
            
            
            </>
        )
    }



}
export default Todo;