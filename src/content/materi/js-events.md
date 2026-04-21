---
title: Mendengarkan Aksi (Events)
category: JS
order: 50
description: Menjalankan kode HANYA saat ada aksi dari pengguna.
content:
  - explanation: >-
      Website yang interaktif bereaksi terhadap tindakan penggunanya, seperti
      klik, geser mouse, atau mengetik. Ini disebut "Events" (Peristiwa).
              
      - **onclick**: Atribut HTML paling mudah untuk memanggil fungsi JS ketika
      elemen diklik.

      - **addEventListener**: Cara profesional di dalam JS untuk "mendengarkan"
      aksi tanpa merusak HTML.

      - Ada banyak aksi selain klik: onmouseover (mouse menyentuh), onkeydown
      (keyboard ditekan).
    code: |-
      <button onclick="sapaPengguna()">Klik Saya!</button>

      <script>
          function sapaPengguna() {
              alert("Terima kasih sudah mengklik!");
          }
      </script>
    challenge: Atribut HTML apa yang paling umum digunakan untuk mendeteksi saat
      sebuah elemen (seperti tombol) ditekan/diklik oleh pengguna?
---
