import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout, Menu, Icon } from 'antd'
import './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

class SiderWrapper extends Component {
  render() {
    const { collapsed } = this.props

    return (
      <Sider className="sider-wrapper" trigger={null} collapsible collapsed={collapsed}>
        <h1 className="sider-logo">AQI</h1>
        <Menu 
          className="sider-menu"
          theme="dark" mode="inline" 
          defaultSelectedKeys={['RealTimeData']}
          defaultOpenKeys={['menu-1']}
        >
          <SubMenu
            key="menu-1"
            title={
              <span>
                <Icon type="user" />
                <span>实时显示</span>
              </span>
            }
          >
            <Menu.Item key="RealTimeData">
              <span>实时数据</span>
            </Menu.Item>
            <Menu.Item key="FloorMonitor">
              <span>楼层监控</span>
            </Menu.Item>
            <Menu.Item key="RealTimeCurve">
              <span>实时曲线</span>
            </Menu.Item>
            <Menu.Item key="AirQuality">
              <span>空气质量</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="menu-2"
            title={
              <span>
                <Icon type="video-camera" />
                <span>项目管理</span>
              </span>
            }
          >
            <Menu.Item key="ProjectList">
              <span>项目列表</span>
            </Menu.Item>
            <Menu.Item key="ProjectLocation">
              <span>项目分布</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

const mapState = (state) => ({
  collapsed: state.getIn(['layout', 'collapsed'])
})

export default connect(mapState, null)(SiderWrapper)