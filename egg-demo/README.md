### 操作步骤

1. 初始化的 egg 的项目 （https://eggjs.org/zh-cn/intro/quickstart.html）
2. 使用 egg-sequelize 数据库 （https://github.com/eggjs/egg-sequelize）
3. 新建一个 sequelize 的文件

```
  sequelize init
```

- sequelize/config.json 的文件，里面修改一下 password，database 等参数

- 创建迁移文件

  ```
  sequelize migration:create --name 【迁移文件名称】
  ```

- 同步迁移文件

  ```
  sequelize db:migrate
  ```

- 创建种子文件（就是假数据）

  ```
  sequelize seed:generate --name 【种子文件名称】
  ```

- 同步种子文件（把假的数据同步到数据中区）

  ```
  sequelize db:seed:all
  ```
