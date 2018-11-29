import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Siderbar extends Component {
	render() {
		// console.info(222, this.props)
		let { collapsed } = this.props
		return (
			  <Sider
			    trigger={null}
			    collapsible
			    collapsed={collapsed}>
			    <div className="logo">
			    	<i className={['iconfont icon-jujuexuexi logoicon',collapsed?'small-icon':null].join(' ')}></i>
			    </div>
			    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			      <Menu.Item key="1">
			        <Icon type="user" />
			        <span>nav 1</span>
			      </Menu.Item>
			      <Menu.Item key="2">
			        <Icon type="video-camera" />
			        <span>nav 2</span>
			      </Menu.Item>
			      <Menu.Item key="3">
			        <Icon type="upload" />
			        <span>nav 3</span>
			      </Menu.Item>
			    </Menu>
			  </Sider>
			)
	}
}


const mapStateToProps = (state) =>({
	collapsed: state.menu.collapsed
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Siderbar)

