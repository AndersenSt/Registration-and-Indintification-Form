import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { indentificateUser, hideError } from '../actions';

class IndentificationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.state.userEmail;
        const password = this.state.userPassword;
        this.props.indentificateUser(email, password);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    renderError() {
        const error = this.props.error;
        if (error) {
            return (
                <div className='error'>
                    You entered an incorrect
                    <br/>
                    email or password
                </div>
            );
        }
    }

    render() {
        return (
            <Paper className='paper' zDepth={2}>
                <form onSubmit={this.handleSubmit} >
                    <label className='label'>
                        Email
                        <span className='star'>*</span>
                    </label>
                    <input type='email'
                        name='userEmail'
                        value={this.state.userEmail}
                        className={this.props.error? 'form-input show-error': 'form-input hide-error'}
                        onChange={this.handleChange}
                        required
                    />
                    <label className='label'>
                        Password
                        <span className='star'>*</span>
                    </label>
                    <input type='password'
                        name='userPassword'
                        value={this.state.userPassword}
                        className={this.props.error? 'form-input show-error': 'form-input hide-error'}
                        onChange={this.handleChange}
                        required
                    />
                    {this.renderError()}
                    <RaisedButton
                        label='enter'
                        primary={true}
                        type='submit'
                    />
                    <Link to='registration-form'
                        className='registrate-link'
                        onClick={() => this.props.hideError()}
                    >
                        Registrate
                    </Link>
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    activeUser: state.activeUser,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    indentificateUser: bindActionCreators(indentificateUser, dispatch),
    hideError: bindActionCreators(hideError, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IndentificationForm);