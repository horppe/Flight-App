import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super(props)
    }
    state = {
        userName: "",
        password: ""
    }

    componentDidMount = () => {

    }

    submitForm = (e) => {
        console.log(this.state)
        e.preventDefault()
        return false;
    }

    handleUserName = (e) => {
        this.setState({userName: e.target.value})
    }

    handlerPassword = (e) => {
        this.setState({password: e.target.value})
    }

    render = () => {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                        <img src="/image_placeholder.png" id="icon" alt="User Icon" />
                    </div>

                   
                    <form onSubmit={this.submitForm}>
                    <input onChange={this.handleUserName} value={this.state.userName} type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
                        <input onChange={this.handlerPassword} value={this.state.password} type="password" id="password" className="fadeIn third" name="login" placeholder="Password" />
                        {/* <input type="submit" className="fadeIn fourth" value="Log In" /> */}
                        <Link className="underlineHover" to="/dashboard" >Log in</Link>
                    </form>

                    
                    <div id="formFooter">
                        <button onClick={this.submitForm} className="underlineHover" href="#">Forgot Password?</button>
                        
                    </div>
                </div>
            </div>
          
        
        )
    }
}