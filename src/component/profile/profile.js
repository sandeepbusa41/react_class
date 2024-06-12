import { useState } from "react"

function UserProfile(){
    const [name,setName]=useState('sandeep')
    const[status,setStaus]=useState(false)
    const[countNum,setcountNum]=useState(0)
    const[employee,setEmployee]=useState({
        name:'sandeep',
        salary:1000,
        designation:'react developer'
    })

    function changeName(){
        setName('Busa')
    }
    function changeEmployeeStatus(){
        setStaus(!status)
        
    }

    function counter(){

        setcountNum(
            countNum+1
        )


    }
    function decreseCount(){
        if(countNum<=0){
            alert('cant decrease to negative values')
        }
        else{
            setcountNum(
                countNum-1
            )
        }
    }
    function resetCount(){
        setcountNum(0
        )

    }
    function increasesalary(){

        setEmployee({
            ...employee,salary:employee.salary+1000,

        }
            
        )
    }
    function changeDesignation(){
        setEmployee({
            ...employee,
            designation:'python developer',

        })
    }




  


    return(
        <div>
        <h1>name is {name}</h1>
        <button  onClick={changeName}>click</button>  
        <h2>is employed:{status?'Yes':'No'}</h2>  
        <button onClick={changeEmployeeStatus}>Click</button>
        <button  onClick={counter}>increase count</button>
        <span>count:{countNum}</span> 
        <button onClick={decreseCount}>decrease</button>
        <button onClick={resetCount}>Rest</button>
        <h1>{employee.name} {employee.salary} {employee.designation}</h1>
        <button onClick={increasesalary}>Salary increase</button>
        <button onClick={changeDesignation}>change designation</button>

    </div>
    )

}
export default UserProfile