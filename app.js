// 引入express模块
const express = require('express');
// 引入用户路由器
const regRouter=require('./router/reg.js');
// 创建app服务器
const app=express();
// 引入主体解析模块
const bodyParser=require('body-parser');
// 使用bodyparser模块
app.use(bodyParser.urlencoded({
    extended:false
}));

// 设置端口号
app.listen(9000);
// 设置静态资源托管文件夹
app.use( express.static('public'));
// 挂载user路由器
app.use('/reg',regRouter);