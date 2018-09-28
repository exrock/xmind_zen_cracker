const fs = require("fs")
const process = require("process")
const path = require("path")

const { usage_text, app_out_dir, blank_files, css, add_css_files } = require("./consts.js")
const { run_as_admin } = require("./uac.js")
const wait = require("./wait.js")

const main = () => {
    const argv = process.argv

    if (argv.length < 3) {
        console.log(usage_text)
        return;
    }

    run_as_admin()

    const dir = argv.slice(2).join(" ")

    try {
        blank_files.forEach((f) => {
            fs.writeFileSync(path.resolve(dir, app_out_dir, f), "")
        })

        add_css_files.forEach((f) => {
            fs.writeFileSync(path.resolve(dir, app_out_dir, f), css, { flag: "a" })
        })
    }
    catch (e) {
        if (e.code == "ENOENT") {
            console.error("无效的XMind ZEN安装目录\nInvalid XMind ZEN installation directory\n")
        }
        else if (e.code == "EPERM") {
            console.error("文件权限错误\nFile Permission Error\n")
        }
        else {
            console.error(e)
        }

        wait()
    }
}

main()
