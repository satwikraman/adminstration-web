import {createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import rootReducer from './Reducers/rootReducer';
export default (url='/')=>{
    const history=createBrowserHistory();
    const initialState={}
    const store=createStore(
        rootReducer(history),
        initialState
    );
    return{
        store,
        history
    }
}
