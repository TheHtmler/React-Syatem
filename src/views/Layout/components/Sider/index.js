import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout, Menu, Icon } from 'antd'
import './index.less'

const { Sider } = Layout

class SiderWrapper extends Component {
  render() {
    const { collapsed } = this.props

    return (
      <Sider className="sider-wrapper" trigger={null} collapsible collapsed={collapsed}>
        <h1 className="sider-logo">LOGO</h1>
        <Menu className="sider-menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>Nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>Nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>Nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

const mapState = (state) => ({
  collapsed: state.getIn(['layout', 'collapsed'])
})

export default connect(mapState, null)(SiderWrapper)