import React, { Component } from 'react'
import { Layout } from 'antd';

import  './App.css'
import Myheader from './components/header/header'
import MyFooter from './components/footer/footer'
import Meun from './components/menu/menu'

// import Routes from './routes';

class App extends Component {
	render() {
    return (
      <Layout>
        <Meun />
        <Layout>
	        <Myheader />
	       	<MyFooter />
        </Layout>
      </Layout>
    );
  }
}

export default App


