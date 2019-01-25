import React from 'react'
import { Form, Input, Icon, Select, Row, Col, Button } from 'antd';
import request from 'src/assets/scripts/request.js'
import { withRouter } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'; 
import ReactQuill from 'react-quill'; 
import './article.less'

const { Option } = Select;
const FormItem = Form.Item;

class Article extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          text: '' ,
          types:[],
          modules:{
              toolbar: [
                  // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                  // [{ 'header': 1 }, { 'header': 2 }], // custom button values

                  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                  ['blockquote', 'code-block'],

                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
                  [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
                  [{ 'direction': 'rtl' }], // text direction
                  ['link', 'image','video','formula'],
               
                  [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
                  [{ 'font': [] }],
                  [{ 'align': [] }],

                  ['clean'], // remove formatting button
                  ['chord'],
                  ['play']
              ]
          }
      } 
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
      console.info('value', value)
        this.setState({
            text: value 
        })
    }

    async fetchList(){
      await request({
        url:`/cate/list?pageSize=100&per_page=1`
      }).then(res=>{
        console.info(res)
        this.setState({
          types: res.data.rows
        })
      })
    }

    componentDidMount(){
      this.fetchList()
    }

    async add({ ...data }){
      console.info('data', data)
      await request({
        url: '/article/add',
        method: 'POST',
        data: data
      }).then(res=>{
        console.info(res.data)
        message.success(res.msg);
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.add({...values,content:this.state.text})
        }
      });
    }

    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }

    render() {
      const { modules, text, types } = this.state
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {

        labelCol: {
          xs: { span: 4 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 10 },
          sm: { span: 8 },
        },
      };

      function handleChange2(value) {
        console.log(`Selected: ${value}`);
      }

      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Button type="primary" htmlType="submit" icon="plus">
              新增          
            </Button>

              <Form.Item
                {...formItemLayout}
                label="标题"
              >
                {getFieldDecorator('title', {
                  rules: [{
                    required: true, message: '请输入标题',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="title"/>
                )}
            </Form.Item>


              <Form.Item
                {...formItemLayout}
                label="分类"
              >
                 {getFieldDecorator('type', {
                  rules: [{
                    required: true, message: '请选择分类',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Select
                    initialValue={types}
                    onChange={handleChange2}
                    mode="tags"
                    labelInValue
                  >
                    {types.map(item => <Option key={item.id}>{item.title}</Option>)}
                  </Select>
                )}
              </Form.Item>

              <Form.Item>
                <Row >
                  <Col span={20} offset={2}>
                    <ReactQuill 
                      value={text}
                      modules={modules}
                      onChange={this.handleChange} 
                    />
                  </Col>
                </Row>
                
              </Form.Item>
          </Form>
        </div>
      );
    }

}

export default  Form.create()(withRouter(Article));

