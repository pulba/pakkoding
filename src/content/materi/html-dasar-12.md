---
title: Alamat File & Favicon
category: HTML
order: 15
description: Mengelola file dan ikon pada tab browser.
content:
  - explanation: >-
      Cara kita memanggil file (seperti gambar) sangat menentukan apakah file
      tersebut muncul atau tidak.
              
      - **Relative Path**: Memanggil file berdasarkan lokasi file HTML kita
      (misal: **"gambar.jpg"** jika satu folder).

      - **Sub-folder**: Jika gambar ada di dalam folder, gunakan tanda miring
      (misal: **"images/logo.png"**).

      - **Favicon**: Ikon kecil yang muncul di **tab browser**. Kita menggunakan
      tag **<link>** untuk memasangnya.

      - **rel="icon"**: Atribut untuk memberitahu browser bahwa file ini adalah
      sebuah ikon.
    code: |-
      <head>
          <link rel="icon" type="image/x-icon" href="favicon.ico">
      </head>
      <img src="/images/semantic-layout.png" alt="Contoh Gambar">
    challenge: Jika file gambar ada di dalam folder bernama "images", bagaimana cara
      menulis atribut src yang benar?
---
