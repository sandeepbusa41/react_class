import { Component } from "react";

class Listcomponent extends Component{


    render(){
        return(
               <ol>

               {
                this.props.ing.map((eachitem)=>{
                    return(
                        <>
                        <li>{eachitem}</li>
                        </>
                    )

                })
               }
               </ol> 
        )
    }
}
export default Listcomponent