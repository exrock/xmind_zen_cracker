# -*- coding: utf-8 -*-
import ctypes
import os
import sys


def is_admin():
    try:
        if ctypes.windll.shell32.IsUserAnAdmin() == 0:
            return False
        else:
            return True
    except:
        return False


def run_as_admin():
    if not is_admin():
        os.system('powershell Start-Process ' + sys.argv[0] + ' -Verb runas')
        sys.exit()
