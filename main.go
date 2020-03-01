package main

import (
"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	//加载html模板
	r.LoadHTMLGlob("templates/*")
	//html模板调用的js
	r.Static("/js", "js")

	//主页
	r.GET("/home", home)
	//获取打卡记录
	r.GET("/sign", sign)

	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}

