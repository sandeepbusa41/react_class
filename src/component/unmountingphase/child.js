import { Component, PureComponent } from "react";

class Child extends Component{
    componentWillUnmount(){
        alert('unmountng component')
    }


    render(){
        return(


            <>
            {console.log('child REndering')}
            <h1>CHild</h1>
            
            </>
        )
    }
}
export default Child