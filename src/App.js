import {Button,Button2} from './component/button';
import Sub from './component/states';
import Todo from './component/todo';
import Products from './component/fetch/fetch';
import Productss from './component/fetch/sample';
import Parent from './component/unmountingphase/parent';
import LoginForm from './component/forms/login';
import UserProfile from './component/profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseEffect from './component/useEffect/useEffectEx1';
import Navgationcomponent from './Navigations/navigations';
import { Provider } from 'react-redux';
import { reduxstore } from './redux/store';
function App(){


      return(
        <div>
          <Provider store={reduxstore}>
          <Navgationcomponent></Navgationcomponent>
          </Provider>
        
        </div>
      )
}
export default App;