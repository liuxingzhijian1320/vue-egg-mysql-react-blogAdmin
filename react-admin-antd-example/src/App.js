import React from 'react'
import { Layout, Row } from 'antd';
import { connect } from 'react-redux'

import Footer from './components/Footer'
import Header from './components/Header'
import Sidermenu from './components/Sidermenu'
import Home from './pages/home'

import 'src/assets/styles/global.less'

class Admin extends React.Component {

    render() {
        return (
            <Layout >
                    <Sidermenu />
                    <Layout>
                        <Header />
                        <Row className = "content" > 
                            { /* <Home/> */ } 
                            { this.props.children } 
                        </Row> 
                        <Footer />
                    </Layout>
            </Layout >
        );
    }
};

export default connect()(Admin);