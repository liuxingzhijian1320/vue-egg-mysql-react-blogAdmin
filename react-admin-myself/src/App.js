import React, { Component } from 'react'
import { Layout } from 'antd';

import  './App.css'
import Myheader from './components/header/header'
import Meun from './components/menu/menu'
import Routes from './routes';

// import Routes from './routes';

class App extends Component {
	render() {
    return (
      <Layout>
        <Meun />
        <Layout>
	        <Myheader />
	        <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Routes/>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App


