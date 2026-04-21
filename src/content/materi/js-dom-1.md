---
title: Memilih Elemen (DOM)
category: JS
order: 48
description: Menghubungkan JavaScript dengan elemen HTML.
content:
  - explanation: >-
      DOM adalah cara JS mengontrol elemen HTML yang sudah kita buat.
              
      - **document**: Mewakili seluruh halaman websitemu.

      - **getElementById()**: Cara paling populer untuk **Memilih** elemen
      berdasarkan nama ID-nya.

      - **.innerHTML**: Properti untuk **Mengubah** tulisan di dalam elemen yang
      sudah dipilih.
    code: |-
      <h1 id="judul">Teks Lama</h1>
      <script>
          document.getElementById("judul").innerHTML = "Teks Baru!";
      </script>
    challenge: Apa fungsi utama dari perintah getElementById di JavaScript?
---
