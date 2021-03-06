import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from '../../router/routes'
import './index.less'
const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;

class NavLeft extends React.Component {
    state = {
        currentKey: ''
    }

    componentWillMount(){
    }

    onSelect=({ item, key, selectedKeys })=>{
        console.info(444, item, key, selectedKeys )
    }

    render() {
        let { collapsed, handleClick } = this.props;
        // console.info(333333, this.props)
        return (
            <Sider
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                > 
              <NavLink to="/dashboard" className="logo-content">
                <i className={`iconfont icon-jujuexuexi logo ${collapsed ? 'collapsedactive' : ''}`}></i>
              </NavLink>
               <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" onSelect={this.onSelect}>
                    
                    {
                        routes.map((item,index)=>{
                            if(item.children){
                                return (
                                    <SubMenu
                                      key={item.path}
                                      title={
                                        <span>
                                          <Icon type="user" />
                                          <span>{item.title}</span>
                                        </span>
                                      }
                                    >
                                    {
                                        item.children.map((code,codeindex)=>{
                                            return (
                                                <Menu.Item key={code.path}>
                                                    <NavLink  to={code.path}>{code.title}</NavLink>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                    </SubMenu>
                                )
                            }else {
                                return (
                                    <Menu.Item key={item.path}>
                                      <NavLink to={item.path}>
                                        <Icon type={item.icon} />
                                        <span>{item.title}</span>
                                      </NavLink>
                                    </Menu.Item>
                                )
                            }
                            
                        })
                    }

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
        // handleClick({ item, key }) {
        //     if (key == this.state.currentKey) {
        //         return false;
        //     }
        //     const action = {
        //         type:'SWITCH_MENU',
        //         value: item.props.title
        //     }
        //     dispatch(action)

        //     this.setState({
        //         currentKey: key
        //     });
        // },
        // homeHandleClick() {
        //     const action = {
        //         type:'SWITCH_MENU',
        //         value: '首页'
        //     }
        //     dispatch(action)
            
        //     this.setState({
        //         currentKey: ""
        //     });
        // }

    }
}
export default connect(mapState,mapDispatch)(withRouter(NavLeft))