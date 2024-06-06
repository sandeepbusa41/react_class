import { Component } from "react";

class Image extends Component{
    render(){
        return(
            <>
        
            <img src={this.props.src} width={150} height={150}></img>
            </>
        )

    }
}

export default Image