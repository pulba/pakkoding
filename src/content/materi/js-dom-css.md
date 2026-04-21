---
title: Mengubah Gaya (DOM CSS)
category: JS
order: 49
description: Menggunakan JS untuk mengubah desain elemen secara langsung.
content:
  - explanation: >-
      JavaScript tidak hanya bisa mengubah teks HTML, tetapi juga bisa memaksa
      perubahan gaya CSS secara instan.
              
      - **.style**: Properti sakti untuk mengakses CSS melalui JavaScript.

      - **CamelCase**: Di JS, properti CSS yang menggunakan tanda hubung
      (seperti background-color) ditulis menyatu dengan huruf besar di tengah
      (backgroundColor).

      - Berguna untuk membuat "Dark Mode" atau menyembunyikan elemen (display =
      "none").
    code: >-
      <div id="kotak" style="width: 100px; height: 100px; background-color:
      blue;"></div>

      <script>
          let elemenKotak = document.getElementById("kotak");
          // Mengubah warna menjadi merah muda
          elemenKotak.style.backgroundColor = "pink";
          // Mengubah bentuk jadi bulat
          elemenKotak.style.borderRadius = "50%";
      </script>
    challenge: Jika di CSS penulisannya adalah "font-size", bagaimanakah cara
      penulisannya saat diubah melalui properti .style di JavaScript?
---
