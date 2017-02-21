(async () => {

  const fs = require('fs');
  const config = require('./taskconfig');
  const unit = require('./lib/unit.js');
  const execP = require('./lib/execp.js');

  const target = config.target;
  let res = [];

  try {
    for (var i in target) {
      console.log(`testing ${target[i].name}`);
      let r = await execP.exec(`./wrk ${config.wrk_arg.join(' ')} ${target[i].url}`);
      let a = r.split('\n')
      console.log(a)
      res.push({
        'name': target[i].name,
        'Latency_Avg': unit.t_us(a[3].split(/ +/)[2]),//make the  time unit us
        'Req/Sec': unit.metric_units(a[4].split(/ +/)[2]),
        'requests': unit.metric_units(a[5].split(/ +/)[1]),
        'Requests/sec': unit.metric_units(a[6].split(/ +/)[1]),
        'Transfer/sec': unit.metric_units(a[7].split(/ +/)[1].slice(0, -1)),
      })
    }
    res.sort((a, b) => {
      return b.requests - a.requests;
    })
    fs.writeFileSync('www/output.js', 'var data = ' + JSON.stringify(res));
    execP.openURL('./www/index.html')
    console.log(`${target.length} task finished ;saving`);
  } catch (e) {//catch await error
    console.error(e)
  }
})()