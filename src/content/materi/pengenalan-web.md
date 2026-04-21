---
title: Pengenalan Web
category: Tools
order: 2
description: Memahami apa itu website dan cara menggabungkan komponennya.
content:
  - explanation: >-
      Website bekerja seperti bangunan yang memiliki kerangka, hiasan, dan
      sistem otomatis.
              
      - **HTML (Kerangka)**: Ibarat fondasi. Menentukan ada apa saja di dalam
      web (teks, gambar, tombol).

      - **CSS (Hiasan)**: Ibarat cat dan dekorasi. Mengatur warna, ukuran, dan
      tata letak.

      - **JS (Logika)**: Ibarat listrik dan sensor. Membuat web bisa
      berinteraksi.

      - **Cara Membuat File**: Di VS Code, buat file baru berakhiran **.html**
      (contoh: `index.html`). Di sinilah kita mulai menulis kode pertama kita.
    code: |-
      <!-- 3 Bagian Utama Website: -->
      <!-- 1. HTML: Kerangka halaman (.html) -->
      <!-- 2. CSS: Desain dan warna (.css) -->
      <!-- 3. JS: Logika dan interaksi (.js) -->
    challenge: Apa akhiran file (ekstensi) yang wajib digunakan saat kita pertama
      kali membuat file kerangka website?
  - explanation: >-
      Kamu bisa menulis ketiga bahasa tersebut (HTML, CSS, JS) di dalam satu
      file atau dipisah-pisah.
              
      - **Digabung (1 File)**: Sangat cocok untuk belajar atau proyek kecil. CSS
      ditaruh di dalam tag **<style>** dan JS ditaruh di dalam tag **<script>**
      langsung di dalam file HTML.

      - **Dipisah (Beda File)**: Standar profesional. Kode lebih rapi dan file
      HTML tidak kepanjangan. Kamu membuat 3 file terpisah (misal: `index.html`,
      `style.css`, dan `script.js`).

      - **Cara Menggabungkan (Integrasi)**: Jika dipisah, file HTML bertugas
      sebagai pemanggil. 
        - Gunakan tag **<link>** di bagian atas untuk memanggil CSS.
        - Gunakan tag **<script src="...">** di bagian bawah untuk memanggil JS.
    code: |-
      <!-- Contoh Digabung (1 File): -->
      <html>
        <head>
          <!-- CSS digabung di sini -->
          <style> h1 { color: blue; } </style>
        </head>
        <body>
          <h1>Halo!</h1>
          <!-- JS digabung di sini -->
          <script> alert("Selamat Datang!"); </script>
        </body>
      </html>

      <!-- ========================= -->
      <!-- Contoh Dipisah (Beda File): -->
      <html>
        <head>
          <!-- Memanggil file CSS eksternal -->
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <h1>Halo!</h1>
          <!-- Memanggil file JS eksternal -->
          <script src="script.js"></script>
        </body>
      </html>
    challenge: Tag apa yang digunakan di dalam HTML untuk memanggil atau
      mengintegrasikan file CSS yang terpisah?
---
