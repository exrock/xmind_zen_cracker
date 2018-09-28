const readline = require("readline")
const process = require("process")

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question("\n请按回车键退出...\nPlease press the Enter key to exit...", () => {
        rl.close()
    })
}
