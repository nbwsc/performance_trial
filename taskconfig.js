module.exports = {

    /*
    test target in ip:port
    */
    target: [
        { name: 'purepython', url: 'http://127.0.0.1:7001/' },
        { name: 'koa', url: 'http://127.0.0.1:7004/' },
        { name: 'iris', url: 'http://127.0.0.1:7003/' },
        { name: 'express', url: 'http://127.0.0.1:7002/' },
        { name: 'django', url: 'http://127.0.0.1:7006/' },
        { name: 'hapi', url: 'http://127.0.0.1:7005/' },
    ],


    /*
    Options:                                            
    -c, --connections <N>  Connections to keep open   
    -d, --duration    <T>  Duration of test           
    -t, --threads     <N>  Number of threads to use   
                                                      
    -s, --script      <S>  Load Lua script file       
    -H, --header      <H>  Add header to request      
        --latency          Print latency statistics   
        --timeout     <T>  Socket/request timeout     
    -v, --version          Print version details      
    */
    wrk_arg: ['-t16', '-c100', '-d10s', '-swrk.lua', '-T2s']

}