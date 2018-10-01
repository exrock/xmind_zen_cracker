# -*- coding: utf-8 -*-
# Xmind Zen 破解器
import os
import platform
import sys

import uac
uac.run_as_admin()

add_css = """

.evaluation-text {
  display: none !important;
}
"""

if platform.system().lower() == "darwin":
    app_out_dir = "./XMind ZEN.app/Contents/Resources/app/out/"
else:
    app_out_dir = "./resources/app/out/"

blank_files = [
    "modal-activateAlert.js",
    "imgs/pdf-footer-zh-CN.svg",
    "imgs/png-watermark-zh-CN.svg",
    "imgs/print-watermark-zh-CN.svg"
]

for i in blank_files:
    open(app_out_dir + i, "wb").close()

with open(app_out_dir + "new.css", "ab") as f:
    f.write(add_css)

with open(app_out_dir + "renderer.css", "ab") as f:
    f.write(add_css)
