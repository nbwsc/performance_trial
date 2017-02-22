const exec = require('child_process').exec;
const spawn = require('child_process').spawn

module.exports = {
    /**
     * @param  {} cmd
     * @return Promise
     */
    exec: cmd => {
        return new Promise(function (resolve, reject) {
            exec(cmd, function (error, res) {
                if (error) return reject(error);
                resolve(res);
            })
        });
    },
    /**
     * @param  {} url
     * @return void()
     * this will open url for different OS
     */
    openURL: url => {
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