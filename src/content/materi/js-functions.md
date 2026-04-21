---
title: Fungsi (Functions)
category: JS
order: 47
description: Membuat pabrik kode yang bisa dipanggil ulang.
content:
  - explanation: >-
      Fungsi adalah blok kode yang dirancang untuk melakukan tugas khusus. Kamu
      cukup menulisnya sekali, dan memanggilnya berkali-kali.
              
      - **function**: Kata kunci untuk membuat fungsi.

      - **Parameter**: Bahan baku yang dimasukkan ke dalam kurung () saat
      memanggil fungsi.

      - **return**: "Hasil akhir" atau jawaban yang dikembalikan oleh fungsi
      tersebut ke tempat ia dipanggil.
    code: |-
      // Membuat fungsi bernama tambahAngka
      function tambahAngka(a, b) {
          return a + b;
      }

      // Memanggil fungsi
      let hasil = tambahAngka(10, 5);
      console.log("Hasilnya adalah: " + hasil);
    challenge: Kata kunci apa yang digunakan di dalam fungsi untuk "mengembalikan"
      nilai hasil proses agar bisa disimpan di variabel lain?
---
