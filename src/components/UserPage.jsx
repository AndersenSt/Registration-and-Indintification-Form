import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goOut } from '../actions';

class UserPage extends React.Component {
    handleClick() {
        this.props.goOut();
        hashHistory.push('/');
    }

    render() {
        const user = this.props.activeUser;
        return (
            <Paper className='paper-user' zDepth={2}>
                <h1>{`${user.name} ${user.surname}`}</h1>
                <h2>Welcome to your page</h2>
                <RaisedButton
                    label='go out'
                    primary={true}
                    type='submit'
                    onClick={() => this.handleClick()}
                />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    activeUser: state.activeUser
});

const mapDispatchToProps = dispatch => ({
    goOut: bindActionCreators(goOut, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);