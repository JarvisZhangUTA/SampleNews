import React from 'react';
import SignInForm from './SignInForm';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error : "",
            user : {
                email : "",
                password: "",
            }
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
           <SignInForm
               onSubmit = {this.onSubmit}
               onChange = {this.onChange}
               error = {this.state.error}
               user = {this.state.user}
           />
        );
    }

    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    }

    onSubmit(event) {
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;
    }
}

export default SignIn;