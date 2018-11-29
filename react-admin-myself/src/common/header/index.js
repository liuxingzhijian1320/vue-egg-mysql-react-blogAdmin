// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	HeaderStyle,
	Logo,
	Nav,
	NavItem,
	SearchBox,
	Search,
	Addtion,
	Button
} from './style'
/**


class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			// isFocused: false
		}
	}
	render(){
		return (
			<HeaderStyle>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登陆</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchBox className={ this.props.isFocused?'focused':'' }>
						<Search 
							className="focused-input"
							onFocus={this.props.focusHandler}
							onBlur={this.props.blurHandler}>
						</Search>
						<i className="i confont focused-iconfont">&#xe623;</i>
					</SearchBox>
				</Nav>
				<Addtion>
					<Button><i className="iconfont">&#xe6c5;</i>写文章</Button>
					<Button className="write">登陆</Button>
				</Addtion>
			</HeaderStyle>
		)
	}

	// focusHandler=(e)=>{
		// this.setState({
		// 	isFocused: true
		// })
	// }

	// blurHandler=(e)=>{
		// this.setState({
		// 	isFocused: false
		// })
	// }
}
*/ 

const Header =(props) =>{
	return (
			<HeaderStyle>
				<Link to='/'><Logo /></Link>
				<Nav>
					<Link to='/'>
						<NavItem className="left active">首页</NavItem>
					</Link>
					<NavItem className="left">下载App</NavItem>
					{
						props.isLogin?
						<NavItem className="right" onClick={props.logout}>
						欢迎！<div className="account">{props.account}</div>退出
						</NavItem>:
						<Link to={'/login'}>
							<NavItem className="right">登陆</NavItem>
						</Link>
					}
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchBox className={props.isFocused?'focused':'' }>
						<Search 
							className="focused-input"
							onFocus={props.focusHandler}
							onBlur={props.blurHandler}>
						</Search>
						<i className="iconfont focused-iconfont">&#xe623;</i>
					</SearchBox>
				</Nav>
				<Addtion>
					<Link to='/write'>
						<Button><i className="iconfont">&#xe6c5;</i>写文章</Button>
					</Link>
					<Button className="write">注册</Button>
				</Addtion>
			</HeaderStyle>
		
	)
}

const mapStateToProps = (state) =>{
	return {
		isFocused: state.header.get('isFocused'),  // immutable 的写法
		isLogin: state.login.get('isLogin'),
		account: state.login.get('account')
	}
}

const mapDispatchToProps =(dispatch) =>{
	return {
		focusHandler(){
			const action = {
				type: 'SEARCH_FOCUS'
			}
			dispatch(action)
		},
		blurHandler(){
			const action = {
				type: 'SEARCH_BLUR'
			}
			dispatch(action)
		},
		logout(){
			const action = {
				type: 'LOGIN/LOGOUT'
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)