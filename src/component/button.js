import { Children } from "react"

   
const Button=(prop)=>{
  console.log(prop)
  const {text}=prop
     return(
      <div>
      <button >{text}</button>
      </div>
     )
}
const Button2=(prop)=>{
  const{children}=prop
  const {text}=prop
     return(
      <div>
      <button >Signin {children}</button>
      </div>
     )
}

export {Button,Button2};