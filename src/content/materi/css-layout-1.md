---
title: Pengenalan Flexbox
category: CSS
order: 37
description: Cara termudah menyusun kotak agar berjejer ke samping.
content:
  - explanation: >-
      Flexbox adalah cara modern yang paling sering dipakai untuk menyusun tata
      letak website.
              
      - **display: flex**: Perintah "Ajaib" yang membuat semua isi di dalam
      kotak otomatis **berjejer ke samping**.

      - **justify-content**: Mengatur posisi horisontal (misal: center agar
      semua isi ke tengah).

      - **gap**: Memberi jarak antar kotak yang sedang berjejer agar tidak
      menempel rapat.
    code: |-
      <div style="display: flex; gap: 10px;">
          <div style="background: red;">Kiri</div>
          <div style="background: blue;">Kanan</div>
      </div>
    challenge: Nilai apa yang diberikan pada properti "display" agar elemen-elemen
      di dalamnya berjejer secara horizontal (ke samping)?
---
