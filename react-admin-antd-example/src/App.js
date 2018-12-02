import React from 'react'
import { Layout, Row } from 'antd';
import { connect } from 'react-redux'

import Footer from './components/Footer'
import Header from './components/Header'
import Sidermenu from './components/Sidermenu'
import Dashboard from './pages/dashboard'

import 'src/assets/styles/global.less'
import 'src/assets/styles/iconfont.css'

import './App.less'

class Admin extends React.Component {

    render() {
        return ( 
            <Layout >
                <Sidermenu />
                <Layout className="layout">
                    <Header className="header" />
                    <Row className = "content" > 
                        { this.props.children } 
                    </Row>  
                    <Footer className="footer" />
                </Layout> 
            </Layout>
        );
    }
};

export default connect()(Admin);