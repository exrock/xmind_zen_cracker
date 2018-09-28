# -*- coding: utf-8 -*-
# Xmind Zen 破解器
import os
import sys

import uac
uac.run_as_admin()

add_css = """

.evaluation-text {
  display: none !important;
}
"""

blank_files = [
    "./resources/app/out/modal-activateAlert.js",
    "./resources/app/out/imgs/pdf-footer-zh-CN.svg",
    "./resources/app/out/imgs/png-watermark-zh-CN.svg",
    "./resources/app/out/imgs/print-watermark-zh-CN.svg"
]

for i in blank_files:
    open(i, "wb").close()

with open("./resources/app/out/new.css", "ab") as f:
    f.write(add_css)

with open("./resources/app/out/renderer.css", "ab") as f:
    f.write(add_css)
