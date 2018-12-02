import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './index.less'

const { Header, Sider, Content } = Layout;

class Myheader extends React.Component{
    
    componentWillMount(){}

    render(){
        const { menuName, collapsed, toggle } = this.props;
        console.info('menuType', menuName)
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={toggle}
                />
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
export default connect(mapStateToProps,mapDispatchToProps)(Myheader)


