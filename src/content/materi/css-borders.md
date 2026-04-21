---
title: Garis Tepi (Borders & Outlines)
category: CSS
order: 26
description: Menambahkan dan membentuk garis di sekitar elemen.
content:
  - explanation: >-
      Properti border memungkinkanmu menentukan gaya, lebar, dan warna garis
      tepi elemen.
              
      - **border-style**: Wajib ada! Nilainya bisa berupa "solid" (garis lurus),
      "dashed" (putus-putus), atau "dotted" (titik-titik).

      - **border-radius**: Digunakan untuk membuat sudut kotak menjadi
      melengkung atau bulat.

      - **Outline**: Mirip seperti border, tapi digambar di luar border dan
      tidak memakan ruang (tidak menambah ukuran kotak).
    code: |-
      <style>
          .kotak-lengkung {
              border: 2px solid blue;
              border-radius: 10px;
              outline: 2px dashed red;
          }
      </style>
      <div class="kotak-lengkung">Kotak dengan Garis</div>
    challenge: Properti apa yang digunakan untuk membuat sudut sebuah elemen menjadi
      melengkung atau bundar?
---
