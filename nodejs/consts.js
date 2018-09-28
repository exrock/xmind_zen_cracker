const usage_text = require("./usage.js")

const app_out_dir = "./resources/app/out/"
const blank_files = [
    "modal-activateAlert.js",
    "imgs/pdf-footer-zh-CN.svg",
    "imgs/png-watermark-zh-CN.svg",
    "imgs/print-watermark-zh-CN.svg"
]

const css = `

.evaluation-text {
  display: none !important;
}
`

const add_css_files = [
    "new.css",
    "renderer.css"
]

module.exports = {
    usage_text,
    app_out_dir,
    blank_files,
    css,
    add_css_files
}
