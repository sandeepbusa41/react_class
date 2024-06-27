export const bookborrow=(qty=1)=>{
    const borrowBook={
        type:'BORROW_BOOK',
        payload:qty
    }
    return borrowBook
}

export const bookreturn=()=>{
    const returnBook={
        type:'RETURN_BOOK',
        payload:1
    }
    return returnBook
}
