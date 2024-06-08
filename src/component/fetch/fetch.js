import { Component } from "react";
import  Image  from "../img/image";
import Listcomponent from "../list/list";
import Loader from "../react-loaders/spinners";
import Spinner from "../react-loaders/rotatinglines";
import React from "react";
class Products extends Component{
     constructor(){
        super()
        this.state={
            recepielist:[],
            issucess:false,
            showdata:false,
            count:0,
            fevcolor:'red',
         }
     }

    fetchdata=()=>{

        
        fetch(`https://dummyjson.com/recipes`)
        .then(res=>res.json()).then((response)=>{
            const { recipes }=response
            this.setState({
                recepielist:recipes || [],
                issucess:true,
            },()=>{
                  console.log(this.state.recepielist)
            }
                
            )


        })
    
    }
    countingnumber=()=>{
        this.setState({
            count:this.state.count+1

        })

    }
    componentDidMount(){
        // document.title=`ReactAPP ${this.state.count}`;
        this.fetchdata()
        
    } 
    static getDerivedStateFromProps(props,state){
        return {fevcolor:props.fevcolor}
    }
    componentDidUpdate(){
        document.title=`REACTAPP${this.state.count}`  
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(props,state){
      return {props,state}
    }


    render(){
        return(
            <>
            <Spinner />

            <Loader color={'green'} bgcolor={'blue'}/>
            <h2 style={{color:this.state.fevcolor}}>{this.state.fevcolor}</h2>
            <h1>hello world!</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.countingnumber}>CLickMEE</button>
            <button  onClick={this.fetchdata}>CLICK</button>
            {
                
                
                (this.state.recepielist.map((eachitem,index)=>{
                    return(

                        <React.Fragment key={index}>
                        <h1>{eachitem.name}</h1>
                        <Image   src={eachitem.image}/>
                        <h2>Ingridents</h2>
                        <Listcomponent ing={eachitem.ingredients}  />
                        <h2>Instructions</h2>
                        <Listcomponent ing={eachitem.instructions}  />
                        </React.Fragment>
                    )
                    



                }))
                //  <h1>{this.state.eachrecipe.name}</h1>
                
            }
            </>

        )
    }
}
export default Products
