import {Button,Button2} from './component/button';
import Sub from './component/states';
import Todo from './component/todo';
import Products from './component/fetch/fetch';
import Productss from './component/fetch/sample';
import Parent from './component/unmountingphase/parent';
function App(){


      return(
        <div>
        {/* <Products   fevcolor={'green'}/> */}
        <Parent/>
        
        </div>
      )
}
export default App;