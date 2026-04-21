---
title: Menghias Tabel
category: CSS
order: 30
description: Membuat tabel HTML lebih rapi dan elegan.
content:
  - explanation: >-
      Tabel HTML bawaan sangat kaku dan jelek. CSS menyulapnya jadi tabel
      profesional.
              
      - **border-collapse: collapse**: Sangat penting! Menggabungkan garis ganda
      bawaan tabel menjadi satu garis tunggal yang rapi.

      - **padding**: Memberi ruang lega di dalam sel tabel (th dan td).

      - **nth-child(even)**: Trik membuat "Zebra Striping" (warna selang-seling)
      agar baris tabel mudah dibaca.
    code: |-
      <style>
          table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
          }
          th, td {
              padding: 10px;
          }
          tr:nth-child(even) {
              background-color: #f2f2f2;
          }
      </style>
      <table>
          <tr><th>Nama</th><th>Kelas</th></tr>
          <tr><td>Budi</td><td>10A</td></tr>
          <tr><td>Siti</td><td>10B</td></tr>
      </table>
    challenge: Properti apa yang berfungsi untuk menghilangkan garis ganda
      (menyatukan garis) pada tepi tabel HTML?
---
