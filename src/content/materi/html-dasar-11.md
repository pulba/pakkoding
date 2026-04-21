---
title: Elemen Semantik (Layout)
category: HTML
order: 14
description: Membuat struktur website yang bermakna dan rapi.
content:
  - explanation: >-
      Gunakan tag yang memiliki "arti" agar Google dan browser lebih mudah
      memahami bagian websitemu.
              
      - **<header>**: Bagian paling **atas** website (logo, judul, menu).

      - **<nav>**: Bagian khusus untuk meletakkan **link navigasi** atau menu
      utama.

      - **<main>**: Area untuk menaruh **konten utama** atau isi paling penting.

      - **<aside>**: Bagian **samping** (sidebar). Cocok untuk iklan, link
      tambahan, atau biodata singkat.

      - **<article>**: Konten yang bisa berdiri sendiri, seperti **berita** atau
      postingan blog.

      - **<section>**: Digunakan untuk membagi isi halaman menjadi beberapa
      **bagian** atau bab.

      - **<figure> & <figcaption>**: Digunakan untuk membungkus **gambar beserta
      judul/keterangan** gambarnya.

      - **<details> & <summary>**: Digunakan untuk membuat konten yang bisa
      **dibuka-tutup** (seperti kotak penjelasan ini!).

      - **<footer>**: Bagian paling **bawah** website (info kontak atau hak
      cipta).
    code: >-
      <header>Logo Sekolah</header>

      <nav>Beranda | Profil</nav>

      <main>
          <article>
              <h2>Judul Berita</h2>
              <p>Isi berita...</p>
          </article>
      </main>

      <aside>Link Populer</aside>

      <figure>
          <img src="/images/semantic-layout.png" alt="Diagram Layout" style="max-width: 100%; height: auto;">
          <figcaption>Diagram Tata Letak Semantic HTML</figcaption>
      </figure>

      <details>
          <summary>Klik untuk detail</summary>
          <p>Ini adalah info rahasia.</p>
      </details>

      <footer>&copy; 2024 Pak Koding</footer>
    challenge: Tag apakah yang digunakan untuk membuat konten yang bisa dibuka-tutup
      (collapsible) tanpa menggunakan JavaScript?
---
