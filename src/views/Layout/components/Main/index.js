import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'

import { Layout, Icon } from 'antd'
import './index.less'

const { Header, Content } = Layout

class MainWrapper extends Component {
  render() {
    const { collapsed, toggleMenuHandler } = this.props

    return (
      <Fragment>
        <Header className="main-header">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleMenuHandler}
          />
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