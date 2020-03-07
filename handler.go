package main

import (
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
	"time"
)

var signTime = make(map[string]string)

func home(c *gin.Context) {
	c.HTML(http.StatusOK, "home.tmpl", nil)
}

func sign(c *gin.Context) {
	name := c.Query("name")
	if name == "" {
		c.String(http.StatusBadRequest, "illegal name!")
		return
	}
	data, _ := ioutil.ReadFile("record")
	startTime := time.Now().Format("2006-01-02 15:04:05")
	record := name + "已于" + startTime + "打卡" + "\r\n" + string(data)
	signTime[name] = startTime
	ioutil.WriteFile("record", []byte(record), 0666)
	c.String(http.StatusOK, record)
}

func leave(c *gin.Context) {
	name := c.Query("name")
	if name == "" {
		c.String(http.StatusBadRequest, "illegal name!")
		return
	}
	data, _ := ioutil.ReadFile("record")
	leavaTime := time.Now()
	record := name + "已于" + leavaTime.Format("2006-01-02 15:04:05") + "下班,"
	var workTime string
	if signtime, ok := signTime[name]; ok {
		local, _ := time.LoadLocation("Local")
		startTime, _ := time.ParseInLocation("2006-01-02 15:04:05", signtime, local)
		workTime = "工作时长:" + leavaTime.Sub(startTime).String()
		delete(signTime, name)
	} else {
		workTime = "工作时长获取失败:未找到打卡时间！"
	}
	record += workTime + "\r\n" + string(data)
	ioutil.WriteFile("record", []byte(record), 0666)
	c.String(http.StatusOK, record)
}