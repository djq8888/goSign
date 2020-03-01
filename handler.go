package main

import (
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
	"time"
)

func home(c *gin.Context) {
	c.HTML(http.StatusOK, "home.tmpl", nil)
}

func sign(c *gin.Context) {
	name := c.Query("name")
	data, _ := ioutil.ReadFile("record")
	record := name + "已于" + time.Now().Format("2006-01-02 15:04:05") + "签到" + "\r\n" + string(data)
	ioutil.WriteFile("record", []byte(record), 0666)
	c.String(http.StatusOK, record)
}