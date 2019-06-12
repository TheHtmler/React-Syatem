import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleMenu } from '../../store/actionCreators'
import { logoutAction } from '../../../Login/store/actionCreators'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import './index.less'

const { Header, Content } = Layout

class MainWrapper extends Component {
  render() {
    const { collapsed, userInfo } = this.props

    const dropdownMenu = (
      <Menu>
        <Menu.Item>系统设置</Menu.Item>
        <Menu.Item>个人资料</Menu.Item>
        <Menu.Item onClick={this.logoutHandler}>退出</Menu.Item>
      </Menu>
    )

    return (
      <Fragment>
        <Header className="main-header">
          <div className="main-header__left">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleMenuHandler}
            />
          </div>
          <div className="main-header__right">
            <Icon type="message" className="main-header__icon" />
            &nbsp;&nbsp;&nbsp;
            <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
              <div className="main-header__userinfo">
                <Icon type="user" className="main-header__icon" />&nbsp;
                {userInfo.name}
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content>
          Content
        </Content>
      </Fragment>
    )
  }

  toggleMenuHandler = () => {
    this.props.toggleMenu()
  }

  logoutHandler = () => {
    this.props.logoutAction()
  }
}

const mapState = (state) => ({
  collapsed: state.getIn(['layout', 'collapsed']),
  userInfo: state.getIn(['login', 'userInfo'])
})

const mapDispatch = dispatch => {
  return bindActionCreators({
    toggleMenu,
    logoutAction
  }, dispatch)
}

// const mapDispatch = (dispatch) => ({
//   toggleMenuHandler() {
//     dispatch(actionCreators.toggleMenu())
//   }
// })

export default connect(mapState, mapDispatch)(MainWrapper)