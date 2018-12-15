import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired
    }
    logout = (e) => {
      e.preventDefault();
      this.props.logout();
    }
  
    render() {
      const { isAuthenticated } = this.props.auth;
      console.log(this.props)
      const userLinks = (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a  href="#" className="nav-link" onClick={ this.logout }>退出</a>
          </li>
        </ul>
      );
  
      const guestLinks = (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">注册</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">登录</Link>
          </li>
        </ul>
      );
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
              <Link className="navbar-brand" to="/">ReduxLogin</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse" id="navbarsExample05">
              { isAuthenticated ? userLinks : guestLinks }
              </div>
            </div>
          </nav>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(NavigationBar);