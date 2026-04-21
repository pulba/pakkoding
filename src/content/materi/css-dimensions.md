---
title: Lebar & Tinggi (Dimensions)
category: CSS
order: 27
description: Mengontrol ukuran kotak agar responsif.
content:
  - explanation: >-
      Mengatur lebar (width) dan tinggi (height) adalah hal dasar, tetapi
      berpotensi merusak tampilan di layar HP jika salah cara.
              
      - **width / height**: Mengatur ukuran elemen secara pasti (contoh: 500px).

      - **max-width**: Sangat penting untuk web responsif! Jika layar lebih
      kecil dari max-width, elemen akan otomatis mengecil mengikuti layar (tidak
      terpotong).

      - Jangan gunakan width tetap jika ingin webmu ramah perangkat seluler,
      gunakanlah max-width atau presentase (%).
    code: |-
      .kotak-responsif {
          max-width: 500px; /* Maksimal 500px, tapi bisa mengecil di HP */
          width: 100%;      /* Penuhi layar yang tersedia */
          height: 200px;
          background-color: lightgreen;
      }
    challenge: "Untuk membuat website responsif, manakah yang lebih aman digunakan
      agar elemen bisa mengecil di layar HP: width atau max-width?"
---
