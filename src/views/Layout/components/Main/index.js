import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actionCreators } from '../../store'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import './index.less'

const { Header, Content } = Layout

class MainWrapper extends Component {
  render() {
    const { collapsed, toggleMenuHandler } = this.props

    const dropdownMenu = (
      <Menu>
        <Menu.Item>设置</Menu.Item>
        <Menu.Item>个人资料</Menu.Item>
        <Menu.Item>
          <Link to="/login">退出</Link>
        </Menu.Item>
      </Menu>
    )

    return (
      <Fragment>
        <Header className="main-header">
          <div className="main-header__left">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleMenuHandler}
            />
          </div>
          <div className="main-header__right">
            <Icon type="message" className="main-header__icon" />
            &nbsp;&nbsp;&nbsp;
            <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
              <Icon type="user" className="main-header__icon" />
            </Dropdown>
          </div>
        </Header>
        <Content>
          Content
        </Content>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  collapsed: state.getIn(['layout', 'collapsed'])
})

const mapDispatch = (dispatch) => ({
  toggleMenuHandler() {
    dispatch(actionCreators.toggleMenu())
  }
})

export default connect(mapState, mapDispatch)(MainWrapper)