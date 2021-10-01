import React from 'react';

import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.util';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput type="email" label="Email" handleChange={this.handleChange} name="email" value={this.state.email} required />
                    <FormInput type="password" label="Password" handleChange={this.handleChange}  name="password" value={this.state.password} required />

                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign in with google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;