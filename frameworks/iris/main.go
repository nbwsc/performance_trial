package main

import "github.com/kataras/iris"

func main() {
	api := iris.New()
	api.Get("/", hi)
	api.Listen(":7003")
}

func hi(ctx *iris.Context) {
	ctx.Writef("hello world")
}
