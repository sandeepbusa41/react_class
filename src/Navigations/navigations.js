import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import AboutScreen from "../screens/about-screen"
import Contactscreen from "../screens/contat-screen"
import Settingscreen from "../screens/setting-screen"
import Homescreen from "../screens/home-screen"
import Invalidcomponent from "../screens/invalid-screen"
import Productdetails from "../component/productdetails/productdetails"


function Navgationcomponent(){
    return(
        <BrowserRouter>
        <Routes>
            <Route   path="/"  Component={Homescreen}/>
            <Route   path="/about"  Component={AboutScreen}/>
            <Route   path="/contact"  Component={Contactscreen}/>
            <Route   path="/setting"  Component={Settingscreen}/>
            <Route path="*" Component={Invalidcomponent}/>

            <Route  path={":category/:id"} Component={Productdetails}></Route>

        </Routes>
        
        
        </BrowserRouter>
    )
}
export default Navgationcomponent