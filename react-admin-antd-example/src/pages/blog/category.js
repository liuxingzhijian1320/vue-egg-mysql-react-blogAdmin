import React from 'react'
import { Table, Modal, Button } from 'antd';
import request from 'src/assets/scripts/request.js'

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
        }],

        tableList:[],
        visible: false
    }

    componentDidMount(){
      request({
        url:'/cate'
      }).then(res=>{
        // console.info(res.data)
        this.setState({
          tableList: res.data
        })
      })
    }

    addHandler=()=>{
      console.info(12312, this)
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



    render() {
      const { columns, tableList, visible } = this.state;
      return (
        <div>
          <Button type="primary" onClick={this.addHandler}>新增</Button>
          <Table columns={columns} dataSource={tableList} rowKey={record => record.id} />
          <Modal
            title="Basic Modal"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
        </div>
      );
    }



}