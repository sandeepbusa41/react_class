import { useMemo, useState } from "react"
import { flushSync } from "react-dom"

function Usememo(){
    const [value,setValue]=useState(0)
    const[age,setAge]=useState(10)
    const[salary,setSalary]=useState(10000)
    // const [data,setData]=useState('even')
    const [bulb,setBulb]=useState(false)
    


    const incrementhandler=()=>{
        setValue(value+1)
        console.log('inc')
    }
    const deccrementhandler=()=>{
        value==0?alert('value cant be in negative values'):setValue(value-1)
        console.log('dec')
    }
    const resethandler=()=>{
        setValue(0)
        console.log('reset')
    }
    const increaseAge=()=>{
        setAge(age+1)
        console.log('ageconsole')
    }
    const increaseSalary=()=>{
        setSalary(salary+2000)
        console.log('salaryconsole')
    }

     const isEven=useMemo(()=>{
        let even=age%2==0?'even':'odd'
        console.log('hello')
        return even
        
    },[age])
    const toggleclick=()=>{
        setBulb(!bulb)
        
    }


    


    return(

        <>
        <h1>{value}</h1>
        <button onClick={incrementhandler}>increment count</button>
        <button onClick={deccrementhandler}>deccrement count</button>
        <button onClick={resethandler}>reset count</button>
        <h2>{age}  and it is {isEven}</h2>
        <button onClick={increaseAge}>increase age </button>
        <h2>{salary}</h2>
        <button onClick={increaseSalary}>increase salary</button>

        
        <h2>{bulb?'ON':'OFF'}</h2>
        <button onClick={toggleclick}>CLICK</button>
        
        </>
    )
}

export default Usememo