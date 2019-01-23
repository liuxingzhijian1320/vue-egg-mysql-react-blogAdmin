import React from 'react'
import { message } from 'antd'
import { withRouter } from 'react-router-dom'
import request from 'src/assets/scripts/request.js'
import axios from 'axios'

import './index.less'

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {
    state = {};

    componentDidMount() {//每次进入登录页清除之前的登录信息
    }

    async getIp(name){
      await axios({
        url:`http://ip-api.com/json?lang=zh-CN`
      }).then(async res=>{
        console.info(res)
        let { ip, country, city, query } = res.data;
        await request({
          url:'/loginlog/add',
          method:'POST',
          data:{
            name: name,
            query: query,
            country: country,
            city: city
          }
        }).then(resp=>{
          console.info(resp)
        })
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            console.info('values', values)
            localStorage.setItem('zhooson_blog_Auth', JSON.stringify(values))

            if(values.userName ==='admin' && values.password=='0000'){
              this.getIp('admin')
              this.props.history.replace('/dashboard')

            }else {
              message.error('账号密码错误！')
            }
          }
        });
    }



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-page">
                <div className="login-content">
                   <div className="login-title">
                        <i className="iconfont icon-jujuexuexi logoimg"></i>
                    </div>
                   <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账户' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账户" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                      })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                      )}
                    </FormItem>
               
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登 录
                      </Button>
                 
                  </Form>
                </div>
              </div>
        );
      }

}

export default  Form.create()(withRouter(Login));


