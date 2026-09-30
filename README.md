# GG_Lua_editor_site

A standalone web IDE for GameGuardian Lua scripts. Free for personal development. Redistribution, mirroring, re-hosting, or commercial use is strictly prohibited. All rights reserved.

[![License: Proprietary](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](#-terms-of-use--license)
[![Editor: Monaco](https://img.shields.io/badge/Editor-Monaco_Editor-blue.svg)](https://microsoft.github.io/monaco-editor/)
[![Platform: PWA](https://img.shields.io/badge/PWA-Offline_Ready-green.svg)](#)

---

## 🌐 Live Web Access

Launch the web studio directly from your browser (No installation required):  
👉 **[Open GG Lua Studio Pro](https://nyankohack.tokyo/Lua_editor.html)**  
*(Portal: [nyankohack.tokyo](https://nyankohack.tokyo/))*

---

<p align="center">
  <img src="GG_script_editor_site_screenshot_1.jpg" alt="GameGuardian Lua Studio IDE Pro Screenshot" width="850">
</p>

## ✨ Key Features

- **Monaco Editor (VS Code core):** Built-in syntax highlighting, parameter hints, and hover documentation specifically tailored for GameGuardian APIs (`gg.searchNumber`, `gg.setValues`, `gg.getRangesList`, etc.).
- **Smart Syntax Checker & Auto-Fix:** Real-time detection of syntax errors and unclosed blocks. Provides 1-click automatic completion for missing `end` statements.
- **Visual Patch & UI Generators:**
  - **RVA & Machine Code Patcher:** Instant ARM64/ARM32 opcode insertion (NOP, RET, MOV) and `libil2cpp.so` Xa memory address calculation.
  - **Struct Table Builder:** Visual GUI for creating batch memory patch tables.
  - **Menu & Dialog Builder:** Generate `gg.choice`, `gg.multiChoice`, and `gg.prompt` dialogs in seconds.
- **Live Memory / Hex Utilities:** Real-time Hex offset calculator (`Base + Offset`) and instant type converter (DWORD, Float, and UTF-8 Hex byte strings).
- **Flexible Export Options:**
  - **Raw (.lua):** Original formatted source code for ongoing development.
  - **Minified (.min.lua):** Strips all comments and unnecessary whitespace to minimize file size.
  - **Self-Decrypting Loader (.enc.lua):** Packages source code into an encrypted payload executed dynamically in GameGuardian memory.
- **PWA & 100% Offline Capability:** Operates entirely client-side. Installable directly to Windows, macOS, Android, or iOS without local server requirements.

---
