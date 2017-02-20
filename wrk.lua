-- custom wrk config here

wrk.method = "GET"  
wrk.headers["Content-Type"] = "application/x-www-form-urlencoded"  
wrk.headers["cache-control"] = "no-cache"
