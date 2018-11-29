import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
import avater from '../style/imgs/b1.jpg';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {

    render() {
       return (
            <Header className="custom-theme header" >
                <Icon className="header__trigger custom-trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
                <Menu mode="horizontal" style={{ lineHeight: '64px', float: 'right' }}>
                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="设置">
                            <Menu.Item key="logout"><Link to="/login">退出登录</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}


export default HeaderCustom;
