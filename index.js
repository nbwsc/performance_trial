const request = require('promise_request');
const fs = require('fs');
const exec = require('child_process').exec;
// const spawn = require('child_process').spawn;

async function asyncReq() {
  let option = {
    method: 'GET',
    url: 'http://127.0.0.1:7001/',
    headers: {
      'cache-control': 'no-cache',
    },
  };
  return await request(option)
}

async function asyncTest() {
  let d = new Date();
  console.log(`starting asyncTest`);
  for (var i = 0; i < 10000; i++) {
    await asyncReq();
  }
  console.log(`end asyncTest at ${new Date().getTime() - d.getTime()} ms for 10000 request`)
}

/*
  use asyncTest
// */
// (async () => {
//   console.log(`startting task ${process.argv[2]}`)
//   await asyncTest()
//   console.log(`task end`)
// })()


/*
use wrk
*/


const execP = function (cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, function (error, res) {
      if (error) return reject(error);
      resolve(res);
    })
  });
};

const config = require('./taskconfig');


let target = config.target;

console.log(wrk_arg)
    (async () => {
      let res = [];
      try {
        for (var i in target) {
          console.log(`testing ${target[i].name}`);
          let r = await execP(`./wrk ${config.wrk_arg.join(' ')} ${target[i].url}`);

          res.push({
            name: target[i].name,
            res: r
          })
        }
        fs.writeFile('output.json', JSON.stringify(res))
        console.log(`${target.length} task finished ;saving`);
      } catch (e) {
        console.error(e)
      }
    })()