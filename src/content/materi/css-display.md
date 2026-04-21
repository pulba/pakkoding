---
title: Sifat Tampilan (Display)
category: CSS
order: 31
description: Memahami Block, Inline, dan cara menyembunyikan elemen.
content:
  - explanation: >-
      Setiap elemen HTML punya sifat tampilan bawaan. Properti display adalah
      pengaturnya.
              
      - **block**: Elemen mengambil layar penuh kiri-ke-kanan dan selalu pindah
      baris baru (contoh: div, h1, p).

      - **inline**: Elemen hanya mengambil ruang sebutuhnya dan tidak pindah
      baris (contoh: span, a). *Tidak bisa diatur tinggi/lebarnya!*

      - **inline-block**: Berjejer ke samping seperti inline, tapi kamu BISA
      mengatur tinggi/lebarnya.

      - **none**: Menyembunyikan elemen seolah-olah elemen itu tidak pernah ada
      di HTML.
    code: >-
      <ul>
          <li style="display: inline-block; padding: 10px; background: orange;">Menu 1</li>
          <li style="display: inline-block; padding: 10px; background: yellow;">Menu 2</li>
      </ul>

      <div style="display: none;">Teks ini disembunyikan!</div>
    challenge: Nilai apa pada properti display yang membuat elemen bisa berjejer ke
      samping TETAPI tetap bisa diubah tinggi dan lebarnya?
---
