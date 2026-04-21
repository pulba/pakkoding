---
title: Satuan Ukuran CSS
category: CSS
order: 35
description: Lebih jauh dari sekadar Pixel (px).
content:
  - explanation: >-
      CSS punya banyak satuan ukur selain Piksel (px) yang membuatnya lebih
      canggih.
              
      - **px (Pixel)**: Ukuran pasti. Tidak akan membesar/mengecil sendiri.

      - **% (Persen)**: Relatif terhadap ukuran pembungkusnya (misal: lebar 50%
      layar).

      - **rem**: Relatif terhadap ukuran font akar (html). Sangat baik untuk
      ukuran huruf karena mendukung pengaturan zoom di HP.

      - **vh & vw**: Viewport Height & Width. 100vh artinya tepat memakan 100%
      tinggi layar HP/Laptopmu, berapapun ukuran layarnya!
    code: |-
      <div style="height: 100vh; background-color: purple; color: white;">
          Kotak ini tingginya persis sama dengan tinggi layarmu!
      </div>
    challenge: Satuan CSS apakah yang mengacu pada 1% dari tinggi layar perangkat
      yang digunakan oleh pengunjung?
---
