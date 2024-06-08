import React from 'react'
import { Comment } from 'react-loader-spinner'
const Loader=(props)=>{
    const {color ,bgcolor}=props
     return(
            <Comment
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color={color}
                backgroundColor={bgcolor}
                />
        

     )
}

export default Loader