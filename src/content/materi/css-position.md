---
title: Posisi Elemen (Position)
category: CSS
order: 32
description: Cara membebaskan elemen dari arus dokumen HTML.
content:
  - explanation: >-
      Ingin membuat tombol yang selalu melayang di pojok layar? Gunakan
      position!
              
      - **static**: Bawaan lahir. Mengikuti urutan HTML dari atas ke bawah.

      - **relative**: Elemen tetap di tempatnya, tapi kamu bisa menggesernya
      sedikit menggunakan top, left, right, atau bottom.

      - **absolute**: Melayang bebas dari dokumen, patokannya adalah elemen
      pembungkus terdekat yang posisinya relative.

      - **fixed**: Menempel mati di layar meskipun di-scroll (cocok untuk
      Navbar).

      - **sticky**: Seperti perpaduan relative dan fixed. Menempel di layar
      hanya ketika kamu menscroll melewatinya.
    code: >-
      <div style="position: fixed; bottom: 20px; right: 20px; background: red;
      padding: 10px; color: white;">
          Bantuan?
      </div>
    challenge: Nilai posisi apakah yang membuat elemen akan terus menempel di layar
      HP/Laptopmu walau kamu menscroll halaman ke paling bawah?
---
