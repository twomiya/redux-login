import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors:{},
      isLoading:false,
    }
  }
//   static contextType={
//       router:PropTypes.object
//   }
  static propTypes={
    userSigupRequest: PropTypes.func.isRequired,
    addFlashMessage:PropTypes.func.isRequired,
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:{},isLoading:true})
    this.props.userSigupRequest(this.state).then(
        () => {
            // console.dir(this.context)
            console.log(this.props)
            this.props.addFlashMessage({
              type: "success",
              text: "你已经注册成功， 欢迎你！"
            })
            this.props.history.push('/');
          },
          ({ response }) => { this.setState({ errors: response.data ,isLoading:false}) }
    );
  }

  render() {
    const {errors} =this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        <h1>欢迎光临!</h1>

        <div className="form-group">
          <label className="control-label">用户名</label>

          <input
            value={ this.state.username }
            onChange={ this.onChange }
            type="text"
            name="username"
            className={classnames("form-control",{'is-invalid': errors.username })}
          />
          {errors.username && <span className='form-text text-muted alert-danger' >{ errors.username }</span>}
        </div>

        <div className="form-group">
          <label className="control-label">邮箱</label>

          <input
            value={ this.state.email }
            onChange={ this.onChange }
            type="email"
            name="email"
            className={classnames("form-control",{'is-invalid': errors.email })}
          />
          {errors.email  && <span className='form-text text-muted alert-danger'>{ errors.email }</span>}
        </div>

        <div className="form-group">
          <label className="control-label">密码</label>

          <input
            value={ this.state.password }
            onChange={ this.onChange }
            type="password"
            name="password"
            className={classnames("form-control",{'is-invalid': errors.password })}
          />
          {errors.password  && <span className='form-text text-muted alert-danger'>{ errors.password }</span> }
        </div>

        <div className="form-group">
          <label className="control-label">确认密码</label>

          <input
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            type="password"
            name="passwordConfirmation"
            className={classnames("form-control",{'is-invalid': errors.passwordConfirmation })}
          />
          {errors.passwordConfirmation  && <span className='form-text text-muted alert-danger'>{ errors.passwordConfirmation }</span>}
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>
            注册
          </button>
        </div>
      </form>
    );
  }
}


export default withRouter(SignupForm)
