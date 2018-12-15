import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {userSigupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

import SignupForm from './SignupForm'
class SignupPage extends Component {
    static propTypes={
        userSigupRequest: PropTypes.func.isRequired,
        addFlashMessage:PropTypes.func.isRequired
      }
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
            <SignupForm 
                userSigupRequest={this.props.userSigupRequest}
                addFlashMessage={this.props.addFlashMessage}
            />
        </div>
        <div className="col-md-3">
        </div>
      </div>
    );
  }
}

export default  connect(null, {userSigupRequest,addFlashMessage})(SignupPage) ;