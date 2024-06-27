

const intialState={
    username:'sandeep',
    userimg:'busa'
}

export function reduxreducer(state=intialState,action){

    switch(action.type){
        case 'USERNAME_CHANGE':
            return {...state,username:action.payload}
        case 'PROFILE_CHANGE':
            return {...state,userimg:action.payload}
        default:
            return state
    }

}