import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function Invalidcomponent(){
    const [var1,setVar1]  =  useState('')


    function Backtohome(){
        const isback=false
        if(isback){
            setVar1('/')
        }
        else{
            setVar1('')
        }
        

    }

    return(

        <>
        <h2>404 Error</h2>
        <button onClick={Backtohome}>Click</button>
        <Link to={var1}>Go to HomePage</Link>
        </>
    )
}
export default Invalidcomponent