import {combineReducers} from 'redux';
import {connectRouter } from 'connected-react-router'

import auth from '../Reducers/authReducer'

const rootReducer=history=>
combineReducers({
    router:connectRouter(history),
    auth
})
export default rootReducer;