import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
	render(){
		return (
			<div>login login login</div>
		)
	}

	// 生命周期
	componentDidMount(){}

}

const mapStateToProps = (state) =>({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Login)