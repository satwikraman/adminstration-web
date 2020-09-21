import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Loadable from 'react-loadable'
const Login = Loadable({
    loader:()=>import('../Components/Login'),
    loading:()=>null,
    modules:["login"]
})
const HomeScreen =Loadable({
    loader:()=>import('../Components/Common/HomeScreen'),
    loading:()=>null,
    modules:["login"]
})

export default()=>(
    <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route  path="/login" component={Login}/>
    </Switch>
)