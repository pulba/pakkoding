---
title: Selector Dasar
category: CSS
order: 21
description: Memilih bagian mana yang ingin dihias.
content:
  - explanation: >-
      Selector digunakan untuk "menunjuk" elemen mana yang ingin kita kasih
      warna atau hiasan.
              
      - **Tag Selector**: Menunjuk langsung nama tag-nya (misal: **h1**, **p**).
      Semua tag tersebut akan berubah.

      - **Class Selector**: Menggunakan simbol **titik (.)**. Sangat fleksibel
      karena bisa dipakai berkali-kali.

      - **ID Selector**: Menggunakan simbol **pagar (#)**. Hanya boleh dipakai
      sekali untuk satu elemen paling spesial.
    code: |-
      <style>
          .teks-biru { color: blue; }
          #judul-utama { font-size: 40px; }
      </style>
      <h1 id="judul-utama" class="teks-biru">Halo!</h1>
    challenge: Simbol apa yang digunakan di CSS untuk memanggil sebuah nama "Class"?
---
