import React,{Component} from 'react';
import '../Styles.css'
class Login extends Component{
    state={}

    render(){
        return(
            <div className="contianer login-home">
                <form className="form">
                    <div className='form-group col-7 center home'>                   
                    <input type="text" className='form-control' placeholder='UserName'/><br/>
                    <input type="password" className='form-control' placeholder="password" /><br/>
                    <button type="submit" className='btn btn-primary'>Sign In</button>
                    </div>
 
                </form>
            </div>
        )
    }
}
export default Login