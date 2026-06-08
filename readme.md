# 🛡️ Sentinel-Kit

Library proteksi integritas untuk project Node.js.

Sentinel-Kit digunakan untuk mendeteksi perubahan file pada project Node.js menggunakan sistem hash integrity. Cocok digunakan untuk melindungi source code dari modifikasi tanpa izin.

---

## ✨ Fitur

- Melindungi file dari modifikasi tanpa izin
- Verifikasi integritas otomatis
- Mendukung proteksi folder
- Mendukung pengecualian file/folder
- Menggunakan Secret Key
- Ringan dan mudah digunakan
- Cocok untuk Bot Telegram, WhatsApp, Discord, dan project Node.js lainnya

---

## 📥 Instalasi

Tambahkan package berikut ke `package.json`:

```json
{
  "dependencies": {
    "sentinel-kit": "github:sergei-ditthtzynsky/sentinel-kit"
  }
}
```

Lalu jalankan:

```bash
npm install
```

---

## 🔨 Membuat File Integrity

Buat file `generateIntegFile.js`

```js
const sentinel = require("sentinel-kit");

sentinel.generateIntegFile({
    listProtectedFileAndFolder: [
        "./"
    ],
    excludeFileAndFolder: [
        "./node_modules",
        "./.npm",
        "./.cache",
        "./.env",
        "./.integ",
        "./package-lock.json",
        "./generateIntegFile.js",
        "./config.json"
    ],
    secretKey: "MY_SECRET_KEY"
});
```

Kemudian jalankan:

```bash
node generateIntegFile.js
```

File integrity akan dibuat secara otomatis.

---

## 🔍 Verifikasi Integritas

Pasang kode berikut pada file utama project (misalnya `index.js`):

```js
const sentinel = require("sentinel-kit");

sentinel.verifyIntegrity({
    listProtectedFileAndFolder: [
        "./"
    ],
    excludeFileAndFolder: [
        "./node_modules",
        "./.npm",
        "./.cache",
        "./.env",
        "./.integ",
        "./package-lock.json",
        "./generateIntegFile.js",
        "./config.json"
    ],
    secretKey: "MY_SECRET_KEY"
});
```

Contoh:

```js
const sentinel = require("sentinel-kit");

sentinel.verifyIntegrity({
    listProtectedFileAndFolder: ["./"],
    excludeFileAndFolder: [
        "./node_modules",
        "./.npm",
        "./.cache",
        "./.env",
        "./.integ"
    ],
    secretKey: "MY_SECRET_KEY"
});

// Kode aplikasi
console.log("Aplikasi berjalan...");
```

---

## 📂 Struktur Project

```text
project/
│
├── index.js
├── package.json
├── generateIntegFile.js
├── .integ/
│
└── node_modules/
```

---

## ⚙️ Konfigurasi

| Parameter | Keterangan |
|------------|------------|
| listProtectedFileAndFolder | File atau folder yang akan dilindungi |
| excludeFileAndFolder | File atau folder yang tidak diperiksa |
| secretKey | Kunci rahasia untuk validasi integrity |

---

## 🛡️ Cara Kerja

Sentinel-Kit akan membuat hash untuk setiap file yang dilindungi.

Saat aplikasi dijalankan:

1. File integrity dibaca.
2. Hash terbaru dihitung.
3. Hash dibandingkan dengan data sebelumnya.
4. Jika ada file yang berubah, verifikasi gagal.

---

## 📌 Cocok Digunakan Untuk

- Bot Telegram
- Bot WhatsApp (Baileys)
- Bot Discord
- REST API Node.js
- Private Source Code
- Project Premium

---

## 👨‍💻 Developer

Ditthtzy

GitHub:
https://github.com/sergei-ditthtzynsky

---

## 📜 Lisensi

MIT License
