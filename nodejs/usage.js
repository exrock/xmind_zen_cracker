const { version } = require("./package.json")

const usage_text = `
XMind ZEN Cracker v${version}

Usage: $ node ${__filename} <XMind ZEN installation directory>

(e.g. $ node ./main.js "C:\\Program Files\\XMind ZEN" )
`

module.exports = usage_text
