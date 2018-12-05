import React from 'react'
import { Table, Modal, Button, Input, Radio, Form, message, Divider } from 'antd';
import request from 'src/assets/scripts/request.js'
import './category.less'
const FormItem = Form.Item;


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
            <Button type="primary" onClick={this.updateHandler(record.id)} size="small">编辑</Button>
            <Divider type="vertical" />
            <Button type="danger" size="small" onClick={this.delHandler} ghost>删除</Button> 
          </div>
        }],

        tableList:[],
        visible: false,
        total: 0,
        current: 1,
        pageSize: 100
    }

    componentDidMount(){
      this.fetchList({per_page: 1})
    }

    async fetchList({ per_page }){
      await request({
        url:`/cate/list?pageSize=${this.state.pageSize}&per_page=${per_page}`
      }).then(res=>{
        // console.info(res.data)
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
      });
     }

    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }

    updateHandler=(id)=>{
      console.info(333, id)
      this.getDetail()
      // this.setState({
      //   visible: true,
      // });
    }
    async getDetail(){
      console.info(214234234645789654345678)
      // await request({
      //   url:`/cate/list`
      // }).then(res=>{
        // console.info(res.data)
        // this.setState({
        //   tableList: res.data.rows,
        //   total: res.data.count
        // })
      // })
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
        this.add(values)
      });
    }

    async add({ ...data }){
      console.info('data', data)
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
          this.fetchList({ per_page: 1 })
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
        
          <Button type="primary" icon="plus" onClick={this.addHandler}>
            新增          
          </Button>

          <Table columns={columns} 
                 dataSource={tableList} 
                 rowKey={record => record.id} 
                 pagination={{  
                   showSizeChanger: true,
                   current: current,
                   pageSize: pageSize,
                   total: total,
                   item: detail,
                   onChange: this.onChange,
                   onShowSizeChange: this.onShowSizeChange
                 }}
           />

          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />



        </div>
      );
    }


}

   const CollectionCreateForm = Form.create()(
      class extends React.Component {
        render() {

          const {
            visible, 
            onCancel, 
            onCreate, 
            form,
          } = this.props;

          const { getFieldDecorator } = form;

          return (
            <Modal
              visible={visible}
              title="分类 新增"
              okText="确定"
              cancelText="关闭"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical">
                <FormItem label="分类名称">
                  {getFieldDecorator('title', {
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