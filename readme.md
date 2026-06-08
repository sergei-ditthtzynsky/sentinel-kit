Sentinel-Kit

Simple Node.js Integrity Protection Library.

Sentinel-Kit digunakan untuk mendeteksi perubahan file pada project Node.js menggunakan sistem hash integrity. Cocok digunakan untuk melindungi source code dari modifikasi tanpa izin.

Instalasi

Tambahkan package berikut ke "package.json":

{
  "dependencies": {
    "sentinel-kit": "github:sergei-ditthtzynsky/sentinel-kit"
  }
}

Lalu install:

npm install

---

Generate Integrity File

Buat file misalnya "generateIntegFile.js"

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

Jalankan:

node generateIntegFile.js

Setelah berhasil, file ".integ" akan dibuat secara otomatis.

---

Verify Integrity

Pasang kode ini sebelum membuat integrity pada file utama project, misalnya "index.js".

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

Jika ada file yang berubah, aplikasi akan langsung dihentikan.

---

Protector

Sentinel-Kit juga menyediakan Protector.

const { Protector } = require("sentinel-kit");

new Protector().init();

Fitur:

- Filter log sensitif
- Blokir output token
- Blokir output database
- Blokir output github/gitlab
- Memastikan project dijalankan melalui npm start

Development Mode:

new Protector().init(true);

---

Rekomendasi

Untuk hasil terbaik, lindungi hanya source code:

listProtectedFileAndFolder: [
    "./index.js",
    "./config.js",
    "./lib",
    "./plugins"
]

Jangan melindungi folder yang berubah otomatis seperti:

node_modules
sessions
session
database
logs
tmp
temp
.cache

Karena perubahan pada file runtime akan menyebabkan Integrity Check gagal.

---

Contoh package.json

{
  "name": "my-project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "sentinel-kit": "github:sergei-ditthtzynsky/sentinel-kit"
  }
}

---

Author

Developed by Ditthtzy

GitHub:
https://github.com/sergei-ditthtzynsky
