import React, { Component } from 'react'

import LoginForm from './LoginForm'
import './index.less'

class Login extends Component {
  render() {
    return ( 
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-left">
            <div className="project-name">AQI</div>
            <div className="project-slogan">
              <p>安全空气质量检测管理平台</p>
              <p>SAFE AQI QUALITY INSPECTION MANAGEMENT PLATFORM</p>
            </div>
          </div>
          <div className="login-right">
            <div className="login-form__title">AQI Management Platform</div>
            <div className="login-form__content">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login