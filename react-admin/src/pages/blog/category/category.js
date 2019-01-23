import React from 'react'
import { Table, Modal, Button, Input, Radio, Form, message, Divider, Popconfirm, Icon } from 'antd';
import moment from 'moment';

import request from 'src/assets/scripts/request.js'
import './category.less'
const FormItem = Form.Item;
const { columns={columns} } = Table;



export default class Category extends React.Component {
    state = {
      columns: [{
          title: 'ID',
          dataIndex: 'id',
        }, {
          title: '标题',
          dataIndex: 'title',
        }, {
          title: '创建时间',
          dataIndex: 'created_at',
        },{
          title: '操作', 
          dataIndex: '', 
          render: (text, record) => <div>
            <Button type="primary" onClick={this.updateHandler.bind(this, record.id)} size="small">编辑</Button>
            <Divider type="vertical" />

          <Popconfirm 
            title="确定要删除该条数据吗？" 
            cancelText="取消"
            okText="确定"
            onConfirm={this.del.bind(this, record.id)}
            icon={
              <Icon type="question-circle-o" style={{ color: 'red' }} />
            }
            >
            <Button   
              type="danger" size="small" 
              ghost
            >
              删除
            </Button> 
          </Popconfirm>
          </div>
        }],

        tableList:[],
        visible: false,
        total: 0,
        current: 1,
        per_page: 1,
        pageSize: 100,
        detail: {}
    }

    componentDidMount(){
      this.fetchList({per_page: 1})
    }

    async del(id){
      console.info('删除数据', id)
       await request({
        url:`/cate/del/${id}`,
        method:'POST'
      }).then(res=>{
        this.fetchList({per_page: this.state.per_page})
      })
    }

    async fetchList({ per_page }){
      await request({
        url:`/cate/list?pageSize=${this.state.pageSize}&per_page=${per_page}`
      }).then(res=>{
        // console.info(res.data)
        res.data.rows.forEach((item)=>{
             item.created_at = moment(item.created_at).format('YYYY-MM-DD HH:mm:ss');
        })
        this.setState({
          tableList: res.data.rows,
          total: res.data.count
        })
      })
    }

    addHandler=()=>{
      this.setState({
        visible: true
      })
    }

    handleOk = (e) => {
      this.setState({
        visible: false,
        detail: {}
      });
    }

    handleCancel = (e) => {
      this.setState({
        visible: false,
        detail: {}
      });
    }

    updateHandler(id){
      this.getDetail(id)
      this.setState({
        visible: true,
      });
    }
    async getDetail(id){
      await request({
        url:`/cate/${id}`,
      }).then(res=>{
       console.info(333, res.data)
       this.setState({
        detail: res.data
       })
      })
    }

    onChange=(current, pageSize)=> {
      // console.log(current, pageSize);
      this.setState({
        current: current
      },()=>{
        this.fetchList({per_page: current})
      })
    }

    onShowSizeChange=(current, pageSize)=> {
      console.log(current, pageSize);
      this.setState({
        pageSize: pageSize
      },()=>{
        this.fetchList({per_page: 1})
      })
    }

    handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        form.resetFields();
        if(this.state.detail.id){
          this.update(this.state.detail.id, values )
        }else {
          this.add(values)
        }
        
      });
    }

    async add({ ...data }){
      // console.info('data', data)
      await request({
        url: '/cate/add',
        method: 'POST',
        data: data
      }).then(res=>{
        // console.info(res.data)
        this.setState({
          visible: false 
        },()=>{
          message.success(res.msg);
          this.fetchList({ per_page: this.state.per_page })
        })
      })
    }

    async update(id, data ){
      // console.info('data22', data, id)
      await request({
        url: `/cate/update/${id}`,
        method: 'POST',
        data: {
          ...data,
          id
        }
      }).then(res=>{
        // console.info(res.data)
        this.setState({
          visible: false 
        },()=>{
          message.success(res.msg);
          this.fetchList({ per_page: this.state.per_page })
        })
      })
    }


    saveFormRef = (formRef) => {
      this.formRef = formRef;
    }

    render() {
      const { columns, tableList, visible, total, current, pageSize, detail } = this.state;
      return (
        <div>
        
          <Button type="primary" className="m-r-t" icon="plus" onClick={this.addHandler}>
            新增          
          </Button>

          <Table dataSource={tableList} 
                 columns={columns}
                 rowKey={record => record.id} 
                 pagination={{  
                   showSizeChanger: true,
                   current: current,
                   pageSize: pageSize,
                   total: total,
                   onChange: this.onChange,
                   onShowSizeChange: this.onShowSizeChange
                 }}
           />

          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={visible}
            detail={detail}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />

        </div>
      );
    }
}




   const CollectionCreateForm = Form.create()(
      class extends React.Component {

        titleHandler(detail){
          if(!detail.id){
            return '分类 新增'
          }else {
            return '分类 编辑'
          }
        }

        render() {

          const {
            visible, 
            onCancel, 
            onCreate, 
            form,
            detail
          } = this.props;

          const { getFieldDecorator } = form;

          return (
            <Modal
              visible={visible}
              title={this.titleHandler(detail)}
              okText="确定"
              cancelText="关闭"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical">
                <FormItem label="分类名称">
                  {getFieldDecorator('title', {
                    initialValue: detail.title,
                    rules: [{ required: true, message: '请输入分类的名称' }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Form>
            </Modal>
          );
        }
      }
    );