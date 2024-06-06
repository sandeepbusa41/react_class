import { Component } from "react";
import  Image  from "../img/image";
import Listcomponent from "../list/list";


class Products extends Component{
     state={
        recepielist:[],
        issucess:false,
        showdata:false,
     }

    fetchdata=()=>{

        if (this.state.showdata) {
            // If data is already shown, hide it
            this.setState({ showdata: false });
          } else {
        fetch('https://dummyjson.com/recipes')
        .then(res=>res.json()).then((response)=>{
            const { recipes }=response
            this.setState({
                recepielist:recipes,
                issucess:true,
                showdata:true,
            },()=>{
                  console.log(this.state.recepielist)
            }
                
            )


        })
    }
    }


    render(){
        return(
            <>
            <h1>hello world!</h1>
            <button  onClick={this.fetchdata}>CLICK</button>
            {
                this.state.showdata?
                (this.state.issucess?
                
                (this.state.recepielist.map((eachitem)=>{
                    return(

                        <>
                        <h1>{eachitem.name}</h1>
                        <Image   src={eachitem.image}/>
                        <h2>Ingridents</h2>
                        <Listcomponent ing={eachitem.ingredients}  />
                        <h2>Instructions</h2>
                        <Listcomponent ing={eachitem.instructions}  />
                        </>
                    )
                    



                })):(<h1>loading</h1>)):null
            }
            </>

        )
    }
}
export default Products
