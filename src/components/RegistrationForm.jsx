import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registrateUser } from '../actions';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        };
        this.props.registrateUser(user);
        this.setState({
            name: "",
            surname: "",
            email: "",
            password: ""
        });
        hashHistory.push('/');
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

     handleClick() {
        hashHistory.push('/');
    }

    render() {
        return (
            <Paper className='paper' zDepth={2}>
                <form onSubmit={this.handleSubmit}>
                    <label className='label'>
                        Name
                        <span className='star'>*</span>
                    </label>
                    <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        className='form-input hide-error'
                        required
                    />
                    <label className='label'>
                        Surname
                        <span className='star'>*</span>
                    </label>
                    <input type='text'
                        name='surname'
                        value={this.state.surname}
                        onChange={this.handleChange}
                        className='form-input hide-error'
                        required
                    />
                    <label className='label'>
                        Email
                        <span className='star'>*</span>
                    </label>
                    <input type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className='form-input hide-error'
                        required
                    />
                    <label className='label'>
                        Password
                        <span className='star'>*</span>
                    </label>
                    <input type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        className='form-input hide-error'
                        required
                    />
                    <RaisedButton
                        label="cancel"
                        primary={true}
                        onClick={this.handleClick}
                    />
                    <RaisedButton
                        label='submit'
                        primary={true}
                        type='submit'
                        className='reg-button'
                    />
                </form>
            </Paper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    registrateUser: bindActionCreators(registrateUser, dispatch)
});

export default connect(null, mapDispatchToProps)(RegistrationForm);