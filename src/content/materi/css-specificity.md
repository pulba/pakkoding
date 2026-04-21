---
title: Prioritas Kode (Specificity)
category: CSS
order: 36
description: Hukum rimba CSS, siapa yang menang?
content:
  - explanation: >-
      Jika kamu punya dua kode CSS yang mewarnai elemen yang sama, siapa yang
      menang? Inilah yang disebut "Specificity".
              
      1. **Inline Style** (di dalam atribut HTML) mengalahkan segalanya.

      2. **ID Selector** (#judul) mengalahkan Class.

      3. **Class Selector** (.teks) mengalahkan Tag Selector.

      4. **Tag Selector** (h1) adalah yang paling lemah.

      - **!important**: Senjata pamungkas. Mengabaikan semua hukum di atas dan
      memaksa CSS menggunakan gaya tersebut (gunakan dengan bijak!).
    code: |-
      <style>
          p { color: blue; }
          .hijau { color: green; }
          #merah { color: red; }
      </style>
      <!-- Ini akan berwarna merah karena ID lebih kuat dari Class dan Tag -->
      <p id="merah" class="hijau">Teks ini warna apa hayo?</p>
    challenge: "Manakah pemilih (selector) yang paling kuat dan akan diprioritaskan
      oleh browser: Tag (p), Class (.hijau), atau ID (#merah)?"
---
