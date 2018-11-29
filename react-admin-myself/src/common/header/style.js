import styled from 'styled-components'
import logopic from '../../static/logo.png'
export const HeaderStyle = styled.div`
	height: 58px;
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
	position: relative;
`

export const Logo = styled.div`
	height: 56px;
	width: 100px;
	position: absolute;
	left: 0;
	top: 0;
	background: url(${logopic});
	background-size: contain;
`

export const Nav = styled.div`
	height: 100%;
	width: 960px;
	margin:0 auto;
`

export const NavItem = styled.div`
	line-height: 56px;
	color: #333;
	padding: 0 15px;
	font-size: 17px;
	display: flex;
	cursor: pointer
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
	.account {
		color: #ff0ff0;
		margin-right: 10px;
	}
`

export const SearchBox = styled.div`
	float: left;
	overflow: hidden;
	position: relative;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 4px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
	}
	&.focused {
		.focused-input {
			transition: all 0.6s ease;
			width: 250px!important;
		}
		.focused-iconfont {
			background: #999;
			transition: all 0.6s ease;
		}
	}

`

export const Search = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 35px 0 20px;
	box-sizing: border-box;
	margin-top: 9px;
	margin-left: 20px;
	color: #777;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	transition: all 0.3s ease;
	&::placeholder {
		color: #999;
	}
`

export const Addtion = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	padding: 0 20px;
	margin-right: 20px;
	font-size: 15px;
	color: #fff;
	background: #ea6f5a;
	&.write {
		color: #ea6f5a;
		background: #fff;
	}
`








