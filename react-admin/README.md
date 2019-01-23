### react-admin

#### 修改端口
新建一个.env的文件（文件名是有点标点符号的）
内容如下：
```
  PORT=4000
```
#### 配置alias
分别打开config/webpack.config.dev(prod).js的 2个文件
```
	 'src': paths.appSrc
```

#### 反向代理
打开package.json的文件
```
	  "proxy": { 
	    "/api": {
	      "target": "https://localhost:7001",
	      "changeOrigin": true, 
	      "pathRewrite": { 
	          "^/api": "/"  
	      }  
	    }  
	  }

```



#### 修改build出来的路径
找到config/paths.js
```
  function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl =
      envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/public/admin/'); // /public/admin/ 或者是 ./   估计自己的需求
    return ensureSlash(servedUrl, true);
  }

```
