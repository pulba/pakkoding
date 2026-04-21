---
title: Mengambil Input (Forms)
category: JS
order: 51
description: Membaca apa yang diketikkan pengguna di kotak input.
content:
  - explanation: >-
      Interaksi paling penting di web adalah mengambil data formulir (seperti
      login atau pencarian).
              
      - **.value**: Kunci utama! Digunakan untuk mengambil (atau mengubah) teks
      yang sedang diketik di dalam kotak <input>.

      - Biasanya digabungkan dengan event onclick pada tombol "Kirim" untuk
      memproses data tersebut.
    code: |-
      <input type="text" id="namaInput" placeholder="Ketik namamu...">
      <button onclick="tampilkanNama()">Sapa Saya</button>

      <script>
          function tampilkanNama() {
              // Mengambil isi teks dari kotak input
              let nama = document.getElementById("namaInput").value;
              alert("Halo, " + nama + "!");
          }
      </script>
    challenge: Properti sakti apa yang digunakan pada elemen input di JavaScript
      untuk mendapatkan teks yang diketikkan oleh pengguna?
---
