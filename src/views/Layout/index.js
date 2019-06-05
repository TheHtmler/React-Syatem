import React, { Component, Fragment } from 'react'

import { Layout } from 'antd'
import SiderWrapper from './components/Sider'
import MainWrapper from './components/Main'
import './index.less'

class LayoutWrapper extends Component {
  render() {
    return (
      <Fragment>
        <Layout className="layout-wrapper">
          <SiderWrapper />
          <Layout>
            <MainWrapper />
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}

export default LayoutWrapper
