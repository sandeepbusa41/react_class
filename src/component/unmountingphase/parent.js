import { Component } from "react";
import Child from "./child";




class Parent extends Component{
    state={
        childvisible:true
    }

    hide=()=>{
        this.setState({
            childvisible:!this.state.childvisible
        })

    }



    render(){
        return(
            

            <>
            {console.log('parent rendering')}
            <button onClick={this.hide} >HIdechild</button>
            {this.state.childvisible?<Child/>:null}
            </>
        )
    }
}
export default Parent;