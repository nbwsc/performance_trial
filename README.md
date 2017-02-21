## performance_trial
    performance trial of http back-end server framework



### TOOLS
* HTTP benchmarking tool:
[wrk-Modern HTTP benchmarking tool](https://github.com/wg/wrk)

* CHART UI:
[echart-baidu echart](https://github.com/ecomfe/echarts)


### FRAMEWORKS
here contains following frameworks:

    node : express koa

    python: django

    go: iris

    ...

or you can start your own framework

### USAGE
1. start your frameworks(`runserver` script may not suitable for you.)
2. set the `taskconfig.js` file .
    `target` is the task array ;
    `wrk_arg` is the wrk cli arguments.
3. `wrk.lua` is the wrk script .
4. run `node --harmony-async-await index.js` or `npm start`and wait;
5. the result will show up in your defualt browser.


### NOTICE
* if you cant use this binary wrk you can build it on your own

    [wrk@github](https://github.com/wg/wrk)


### SCREENSHOT
![screenshot](/result_demo.png)
I think the python result is not accurate.but iris seems really fast.