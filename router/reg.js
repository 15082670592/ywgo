// 引入express模块
const express = require('express');
// 引入连接池模块
const pool = require('../pool.js');
// 创建路由器
const router = express.Router();

router.get("/v1/register", (req, res) => {
	// res.send("请求成功");
	var info = req.query;
	console.log(info)
	// res.send("1")
	pool.query('insert into yw_user set ? ', [info], (error, result) => {
		if (error) throw error;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1")
		}else{
			res.send("0")
		}
	});
})

module.exports = router;
