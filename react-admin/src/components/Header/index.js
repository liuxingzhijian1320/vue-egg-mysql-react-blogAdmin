import React from 'react'
import { Layout, Menu, Dropdown, Icon, message, Row, Col } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './index.less'

const { Header, Sider, Content } = Layout;

class Myheader extends React.Component{
    
    componentWillMount(){}

    handleMenuClick = (e) => {
      if (e.key === '1') {
        localStorage.removeItem("zhooson_blog_Auth")
        this.props.history.replace('/login')
      }
    }

    render(){
        const { menuName, collapsed, toggle, history } = this.props;
        // console.info('menuType', menuName)s


        const menu = (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">
                <div onClick={this.logout}>
                    <Icon type="poweroff" style={{margin: '0 10px'}} />退出
                </div>
            </Menu.Item>
          </Menu>
        );

        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Row>
                    <Col span={2}>
                        <Icon
                          className="trigger"
                          type={collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={toggle}
                        />
                    </Col>
                    <Col span={20} />
                    <Col span={2} >
                        <Dropdown 
                            overlay={menu}
                            onVisibleChange={this.handleVisibleChange}
                        >
                           <a className="ant-dropdown-link" href='javascript:;;'>
                             设置 <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
          </Header>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.siderbar.menuName,
        collapsed: state.siderbar.collapsed,
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        toggle(){
            const action = {
                type:'STATUS_MENU'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Myheader))


