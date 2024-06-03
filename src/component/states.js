import { Component } from "react";




class Sub extends Component{
    state={
        subscribedText:"SUBSCRIBED",
        subscribeText:'SUBSCRIBE',
        issub:false,
    }
    changestate=()=>{
        this.setState({
            issub:!this.state.issub,
        })
    }
    render(){
        return(
            <>
             <button onClick={this.changestate}>{this.state.issub?this.state.subscribedText:this.state.subscribeText}</button>
            </>
        )
    }
}

export default Sub;



