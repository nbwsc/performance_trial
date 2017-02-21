const exec = require('child_process').exec;
const spawn = require('child_process').spawn
/**
 * exec with promise
 * @param  {} cmd
 */
module.exports = {
    exec: (cmd) => {
        return new Promise(function (resolve, reject) {
            exec(cmd, function (error, res) {
                if (error) return reject(error);
                resolve(res);
            })
        });
    },
    openURL: (url) => {
        switch (process.platform) {
            case "darwin":
                exec('open ' + url)
                break
            case "win32":
                exec('start ' + url)
                break
            default:
                spawn('xdg-open', [url])
        }
    }

}