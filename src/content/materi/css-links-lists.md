---
title: Menghias Link & Daftar
category: CSS
order: 29
description: Membuat tombol dari link dan merapikan daftar.
content:
  - explanation: >-
      Link dan List (Daftar) memiliki gaya bawaan yang seringkali ingin kita
      ubah.
              
      - **text-decoration: none**: Resep rahasia untuk menghilangkan garis bawah
      biru pada link (tag a).

      - **list-style-type: none**: Menghilangkan titik hitam (bullet) bawaan
      dari tag ul dan li.

      - Kamu bisa mengganti list-style-type dengan gambar atau bentuk lain
      seperti kotak (square).
    code: |-
      <style>
          a {
              text-decoration: none;
              background-color: blue;
              color: white;
              padding: 5px 10px;
          }
          ul {
              list-style-type: square;
          }
      </style>
      <a href="#">Ini Tombol!</a>
      <ul><li>Satu</li><li>Dua</li></ul>
    challenge: Perintah CSS apa yang wajib kamu gunakan jika ingin menghilangkan
      garis bawah pada sebuah tautan (link)?
---
