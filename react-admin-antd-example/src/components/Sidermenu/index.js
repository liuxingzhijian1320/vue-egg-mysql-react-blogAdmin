import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuConfig from '../../router/config'
import './index.less'
const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;

class NavLeft extends React.Component {
    state = {
        currentKey: ''
    }

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        let { collapsed } = this.props;
        return (
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                > 
                  <NavLink to="/home">
                    <div className="logo" />
                  </NavLink>
                  <Menu
                    onClick={this.handleClick}
                    theme="dark"
                  >
                    { this.state.menuTreeNode }
                </Menu>
                </Sider>
        );
    }
}
const mapState = state =>{
    return {
        collapsed: state.siderbar.collapsed
    }
}
const mapDispatch = dispatch =>{
    return {
        // 菜单点击
        handleClick({ item, key }) {
            if (key == this.state.currentKey) {
                return false;
            }
            const action = {
                type:'SWITCH_MENU',
                value: item.props.title
            }
            dispatch(action)

            this.setState({
                currentKey: key
            });
            // hashHistory.push(key);
        },
        homeHandleClick() {
            const action = {
                type:'SWITCH_MENU',
                value: '首页'
            }
            dispatch(action)
            
            this.setState({
                currentKey: ""
            });
        }

    }
}
export default connect(mapState,mapDispatch)(NavLeft)