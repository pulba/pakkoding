---
title: Algoritma (Cara Berpikir Komputer)
category: Koding
order: 58
description: Langkah-langkah logis yang menjadi fondasi semua program.
content:
  - explanation: >-
      Algoritma adalah jantung dari semua pemrograman. Ia adalah urutan
      langkah-langkah logis dan terstruktur untuk menyelesaikan suatu masalah.
              
      - **Harus Jelas**: Setiap langkah tidak boleh ambigu (bermakna ganda).

      - **Harus Berurutan**: Langkah-langkahnya dilakukan dari atas ke bawah
      secara teratur.

      - **Harus Berakhir**: Algoritma harus punya titik selesai, tidak boleh
      berjalan tanpa henti.

      - **Contoh**: Algoritma menyeduh kopi: (1) Siapkan gelas, (2) Masukkan
      kopi, (3) Tuang air panas, (4) Aduk, (5) Kopi siap diminum.
    code: |-
      // Algoritma: Menentukan bilangan genap atau ganjil
      let angka = 8;

      // Langkah 1: Ambil angka
      // Langkah 2: Bagi dengan 2, cek sisanya
      if (angka % 2 === 0) {
          // Langkah 3a: Jika sisa = 0, maka genap
          console.log(angka + " adalah bilangan GENAP");
      } else {
          // Langkah 3b: Jika sisa bukan 0, maka ganjil
          console.log(angka + " adalah bilangan GANJIL");
      }
    challenge: Sebutkan 3 syarat utama agar sesuatu bisa disebut sebagai algoritma
      yang baik!
---
