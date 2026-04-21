---
title: Desain Responsif (Viewport)
category: HTML
order: 16
description: Membuat website agar tampil bagus di HP dan Laptop.
content:
  - explanation: >-
      Website yang baik harus bisa dibuka dengan nyaman di layar kecil (HP)
      maupun layar lebar (Laptop).
              
      - **Viewport**: Area tampilan website di layar pengguna.

      - **Tag <meta name="viewport">**: Tag wajib di dalam **<head>** agar
      website tidak terlihat "kecil" saat dibuka di HP.

      - **content="width=device-width"**: Instruksi agar lebar website mengikuti
      lebar layar perangkat pengguna.

      - **initial-scale=1.0**: Instruksi agar saat pertama kali dibuka, zoom
      website berada di ukuran normal (100%).
    code: |-
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
    challenge: Apa nama tag yang wajib diletakkan di dalam <head> agar website kita
      tampil bagus saat dibuka di HP?
---
