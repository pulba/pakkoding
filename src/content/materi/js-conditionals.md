---
title: Kondisi (If...Else)
category: JS
order: 45
description: Membuat websitemu bisa mengambil keputusan.
content:
  - explanation: >-
      Percabangan (If/Else) membuat programmu menjadi pintar. Ia bisa melakukan
      hal berbeda pada situasi yang berbeda.
              
      - **if (jika)**: Mengecek apakah kondisinya BENAR (true). Jika benar,
      jalankan kode di dalam kurung kurawal {}.

      - **else if (atau jika)**: Pengecekan kedua jika kondisi pertama salah.

      - **else (selain itu)**: Pilihan terakhir jika semua kondisi sebelumnya
      salah.
    code: |-
      let nilai = 85;

      if (nilai > 90) {
          console.log("A - Luar Biasa!");
      } else if (nilai > 75) {
          console.log("B - Lulus!");
      } else {
          console.log("C - Belajar Lagi ya.");
      }
    challenge: Blok kode manakah yang akan dieksekusi sebagai jalan terakhir jika
      semua kondisi (if) sebelumnya bernilai salah (false)?
---
