---
title: Efek Interaktif (Pseudo-classes)
category: CSS
order: 34
description: Membuat website hidup saat disentuh mouse.
content:
  - explanation: >-
      Pseudo-classes digunakan untuk memberikan gaya khusus pada elemen ketika
      elemen tersebut dalam keadaan (state) tertentu.
              
      - **:hover**: Berubah warna saat mouse/kursor diarahkan ke atasnya (sangat
      sering dipakai untuk tombol!).

      - **:active**: Berubah warna pada detik saat elemen tersebut
      diklik/ditekan.

      - **:focus**: Saat kolom input diklik untuk mulai mengetik.

      - **:nth-child()**: Rumus sakti untuk memilih urutan tertentu (misal:
      warna berbeda untuk baris ganjil/genap pada tabel).
    code: |-
      <style>
          button {
              background-color: blue;
              color: white;
              padding: 10px;
          }
          button:hover {
              background-color: red; /* Berubah merah saat disentuh mouse */
          }
      </style>
      <button>Sentuh Aku!</button>
    challenge: Kata kunci pseudo-class apa yang digunakan untuk membuat perubahan
      pada tombol ketika kursor mouse kita menyentuh tombol tersebut?
---
