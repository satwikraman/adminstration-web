import React,{Component} from 'react';
import '../Styles.css'
import Header from './Common/Header';
class Login extends Component{
    state={}

    render(){
        return(
            <div>
                <Header/>
                <section className="non-home-banner-area">
                    <div className="container">
                        <div className="home-banner-content">
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                    <h1 className="text-center">Login</h1>
                                    <form>                 
                                        <input type="text" placeholder='UserName'/>
                                        <input type="password"   placeholder="password" />
                                        <div className= "d-flex align-items-center justify-content-between">
                                            <button type="submit" className='genric-btn info my-4'>Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Login