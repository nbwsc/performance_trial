module.exports = {

    /*
    test target in ip:port
    */
    target: [
        { name: 'egg', url: '127.0.0.1:7001/'},

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
    wrk_arg: ['-t16','-c100','-d100','-swrk.lua','-T2s']

}