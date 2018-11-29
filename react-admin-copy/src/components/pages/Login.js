import React from 'react';
import { Input, Button , Icon} from 'antd';
import { Link } from 'react-router-dom'


class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        <Link to="/">登录</Link>
                    </Button>
                </div>
            </div>
        );
    }
}


export default Login