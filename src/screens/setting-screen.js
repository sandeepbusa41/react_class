
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../component/NavBar/navbar"
import Usememo from "../component/useMemo/useMemo"
import { bookborrow, bookreturn } from "../redux/books/action"
import { changenameaction } from "../redux/profile/action"
function Settingscreen(){

    const reduxdata=useSelector((state)=>{
        return state
    })
    console.log(reduxdata)

    const dispatch=useDispatch()

    function borrow(){
        dispatch(bookborrow())
    }
    function returnBook(){
        dispatch(bookreturn())
    }
    function changename(){
        dispatch(changenameaction('sandeepbusa'))
    }

    return(
        <>
        <Navbar/>
        <Usememo/>
        <h2>Setting screen</h2>
        <h1>BOOK COUNT {reduxdata.books.totalBooks}</h1>
        <button onClick={borrow}>borrow book from library</button>
        <button onClick={returnBook}>return book to library</button>
        <h2>BOOK DETAILS</h2>
        {reduxdata.books.bookdetails.map((each)=>{
            return(
                <>
                <p>{each.title}</p>
                <p>{each.price}</p>
                </>
            )
            
        })}
        <h2>{reduxdata.profile.username}</h2>
        <button onClick={changename}>changename</button>

            </>
    )
}
export default Settingscreen