import React from 'react'
import { Table, Modal, Button, Pagination } from 'antd';
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
        visible: false,
        total: 0,
        current: 1,
        pageSize: 10
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




    render() {
      const { columns, tableList, visible, total, current } = this.state;
      return (
        <div>
          <Button type="primary" onClick={this.addHandler}>新增</Button>
          <Table columns={columns} 
                 dataSource={tableList} 
                 rowKey={record => record.id} 
                 pagination={{  
                   showSizeChanger: true,
                   current: current,
                   pageSize: 10,
                   total: total,
                   onChange: this.onChange,
                   onShowSizeChange: this.onShowSizeChange
                 }}
           />


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

    table = () =>{
      console.info(33, this.props)
      return (
        <div>qweqe</div>
      )
    }



}