import React from 'react'
import { Table } from 'antd';
import moment from 'moment';

import request from 'src/assets/scripts/request.js'

const { columns={columns} } = Table;



export default class Loginlog extends React.Component {
    state = {
      columns: [{
          title: 'ID',
          dataIndex: 'id',
        }, {
          title: '登录名字',
          dataIndex: 'name',
        }, 
        {
          title: '国家',
          dataIndex: 'country',
        },
        {
          title: '省',
          dataIndex: 'city',
        },
        {
          title: 'IP',
          dataIndex: 'query',
        },{
          title: '登录时间',
          dataIndex: 'login_time',
        }],

        tableList:[],
        total: 0,
        current: 1,
        per_page: 1,
        pageSize: 100,
       
    }

    componentDidMount(){
      this.fetchList({per_page: 1})
    }


    async fetchList({ per_page }){
      await request({
        url:`/loginlog/list?pageSize=${this.state.pageSize}&per_page=${per_page}`
      }).then(res=>{
        this.setState({
          tableList: res.data.rows,
          total: res.data.count
        })
      })
    }

    render() {
      const { columns, tableList, total, current, pageSize } = this.state;
      return (
        <div>
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
        </div>
      );
    }
}

