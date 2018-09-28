const process = require("process")
const child_process = require("child_process")

const FFI = require("ffi")

const is_admin = () => {
    try {
        const shell32_dll = new FFI.Library("shell32", {
            "IsUserAnAdmin": [
                "bool", []
            ]
        })

        return shell32_dll.IsUserAnAdmin()
    }
    catch (e) {
        return true
    }
}

const run_as_admin = () => {
    if (!is_admin()) {
        const dir = process.argv.slice(2).join(" ")

        child_process.execSync(
            `powershell Start-Process "'${process.argv[0]}'" -Args '${process.argv[1]}','${dir}' -Verb runas`,
            {
                windowsHide: true
            }
        )
        process.exit()
    }
}

module.exports = {
    run_as_admin
}
