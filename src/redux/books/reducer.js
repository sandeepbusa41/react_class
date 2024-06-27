const intialState={
    totalBooks:100,
    bookdetails:[
        {
            title:'HUMAN MIND',
            price:100
        },
        {
            title:'DOG MIND',
            price:200
        },{
            title:'BIRD MIND',
            price:130
        }
        
    ]

}


export const reducerfunction=(state=intialState,action)=>{

    switch(action.type){

        case 'BORROW_BOOK':
            return {...state,totalBooks:state.totalBooks-action.payload}

        case 'RETURN_BOOK':
            return {...state,totalBooks:state.totalBooks+action.payload}
        default:
            return state
    }

}