import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Loadable from 'react-loadable'

const Login = Loadable({
    loader:()=>import('../Components/Login'),
    loading:()=>null,
    modules:["login"]
})

export default()=>(
    <Switch>
        <Route exact path="/" component={Login}/>
    </Switch>
)