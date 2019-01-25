<template>
  <div class="hello">
    <!-- <input v-model.trim="title" type="text"> -->
    <!-- <button @click="add">新增</button> -->
    <hr>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="title" label="菜系"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <!-- <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" @click="del(scope.row)" size="small">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <!-- 编辑弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="菜系">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import request from "../../request/index";

export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
      title: "",
      dialogFormVisible: false,
      formData: {}
    };
  },
  async created() {
    // let { data } = await request({
    //   url: "/cate",
    //   method: "GET"
    // });

    this.fetch();
  },
  methods: {
    async fetch() {
      let { data } = await request(
        {
          url: "/article/list?pageSize=100&per_page=1"
        },
        {
          // isLoading: false
        }
      );
      data.rows.forEach(
        item =>
          (item.created_at = moment(item.created_at).format(
            "YYYY-MM-DD HH:mm:ss"
          ))
      );
      this.list = data.rows;
    },
    async add() {
      if (!this.title) return;
      let res = await request({
        url: "/cate/add",
        method: "POST",
        data: {
          title: this.title,
          created_at: new Date()
        }
      });
      this.fetch();
    },
    update(row) {
      this.formData = JSON.parse(JSON.stringify(row));
      this.dialogFormVisible = true;
    },
    async submit() {
      let res = await request({
        url: `/cate/update/${this.formData.id}`,
        method: "post",
        data: this.formData
      });
      this.$message({
        type: "success",
        message: "更新成功!"
      });
      this.dialogFormVisible = false;
      this.fetch();
    },
    del(row) {
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await request({
            url: `/cate/del/${row.id}`,
            method: "POST",
            data: {
              title: this.title,
              created_at: new Date()
            }
          });
          this.fetch();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
