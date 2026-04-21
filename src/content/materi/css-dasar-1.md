---
title: Cara Menempelkan CSS
category: CSS
order: 20
description: Tiga cara memberikan warna pada halaman web.
content:
  - explanation: >-
      CSS adalah bahasa desain. Ada beberapa cara menempelkan desain ke HTML:
              
      - **Internal CSS**: Menulis kode di dalam tag **<style>** yang diletakkan
      di dalam **<head>**.

      - **Inline CSS**: Menulis desain langsung di dalam atribut tag HTML
      menggunakan **style="..."**.

      - **External CSS**: Cara paling profesional. Menulis desain di file
      terpisah (style.css) lalu dipanggil ke HTML.
    code: |-
      <style>
          h1 { 
              color: red; 
              text-align: center;
          }
      </style>
    challenge: Di dalam tag apakah kita biasanya menuliskan kode CSS jika diletakkan
      langsung di dalam file HTML?
---
