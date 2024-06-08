import React, { Component } from "react";

class Listcomponent extends Component{


    render(){
        return(
               <ol>

               {
                this.props.ing.map((eachitem,index)=>{
                    return(
                        <React.Fragment key={index}>
                        <li>{eachitem}</li>
                        </React.Fragment>
                    )

                })
               }
               </ol> 
        )
    }
}
export default Listcomponent