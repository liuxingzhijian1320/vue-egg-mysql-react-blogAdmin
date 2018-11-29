import React, { Component } from 'react'
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux'

class Header extends Component {
	render() {
		let { collapsed, toggle } = this.props
		return (
					 <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}/>
          </Layout.Header>
			)
	}
}

const mapStateToProps = (state) =>({
	collapsed: state.menu.collapsed
})

const mapDispatchToProps = (dispatch) => ({
	toggle(){
		const action = {
				type: 'MEUN/STATUS'
		}
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)




