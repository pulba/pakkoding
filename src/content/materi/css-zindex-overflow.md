---
title: Tumpukan & Meluap (Z-index & Overflow)
category: CSS
order: 33
description: Mengontrol elemen yang bertumpuk dan isi yang kepanjangan.
content:
  - explanation: >-
      Ketika menggunakan posisi (absolute/fixed), elemen bisa saling menumpuk.
              
      - **z-index**: Menentukan siapa yang berada di depan. Elemen dengan
      z-index lebih besar akan menutupi yang kecil (misal: 10 menutupi 1).

      - **overflow**: Apa yang terjadi jika isi teks lebih besar dari ukuran
      kotaknya?
          - visible (bawaan): Teks keluar kotak.
          - hidden: Teks yang keluar langsung dipotong.
          - scroll: Muncul scrollbar di dalam kotak.
    code: >-
      <div style="width: 200px; height: 50px; overflow: scroll; border: 1px
      solid black;">
          Ini adalah teks yang sangat amat panjang sekali sehingga tidak akan muat di dalam kotak kecil ini dan akan memicu kemunculan scrollbar.
      </div>
    challenge: Jika kamu punya dua gambar yang posisinya saling bertumpuk, properti
      apa yang mengatur gambar mana yang berada di paling atas (depan)?
---
