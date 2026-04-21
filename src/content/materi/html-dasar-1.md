---
title: Halaman HTML Pertama
category: HTML
order: 4
description: Membuat kerangka dasar dokumen HTML.
content:
  - explanation: >-
      Struktur dasar ini wajib ada di setiap file HTML agar browser tidak
      bingung.
              
      - **<!DOCTYPE html>**: Deklarasi untuk memberitahu browser bahwa kita
      menggunakan standar **HTML5 (terbaru)**.

      - **<html>**: Tag utama yang membungkus seluruh isi file. Semua kode harus
      ada di dalam sini.

      - **<head>**: Bagian "kepala" atau otak. Berisi informasi rahasia yang
      tidak muncul di layar, seperti judul tab.

      - **<title>**: Berada di dalam head, gunanya untuk memberi nama pada **tab
      browser** di bagian atas.

      - **<body>**: Bagian "tubuh". Semua teks, gambar, dan link yang kamu tulis
      di sini akan **muncul di layar putih** website.
    code: |-
      <!DOCTYPE html>
      <html>
      <head>
          <title>Halaman Saya</title>
      </head>
      <body>
          <h1>Halo Dunia!</h1>
          <p>Selamat datang di website pertama saya.</p>
      </body>
      </html>
    challenge: Bagian mana yang harus kita gunakan jika ingin menuliskan konten
      (seperti teks atau gambar) agar muncul di layar website?
---
