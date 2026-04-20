// src/data/lessons.ts

export interface Lesson {
  id: string;
  title: string;
  category: 'HTML' | 'CSS' | 'JS' | 'Tools' | 'Koding' | 'AI';
  description: string;
  content: {
    explanation: string;
    code: string;
    challenge: string;
    image?: string;
  }[];
}

export const lessons: Lesson[] = [
  // 0. Persiapan Belajar
  {
    id: `persiapan-belajar`,
    title: `Persiapan Belajar`,
    category: `Tools`,
    description: `Panduan awal sebelum memulai petualangan koding Anda.`,
    content: [
      {
        explanation: `Persiapan adalah langkah terpenting agar belajarmu lancar tanpa hambatan teknis.
        
- **Laptop/Komputer**: Alat utama untuk mengetik. Browser saja tidak cukup untuk menjadi profesional.
- **VS Code**: Ini adalah aplikasi "Teks Editor" atau tempat kamu menulis kode. Ibaratnya seperti buku tulis digital khusus koding.
- **Browser (Chrome/Edge)**: Aplikasi untuk melihat hasil kodemu. Browser bertugas mengubah teks koding menjadi tampilan web yang bagus.
- **Folder Proyek**: Tempat kamu menyimpan semua file kodingmu agar tidak berantakan dan mudah ditemukan kembali.`,
        code: `// Langkah-langkah persiapan:
// 1. Siapkan Laptop atau Komputer.
// 2. Gunakan Browser (Google Chrome atau Microsoft Edge).
// 3. Pasang aplikasi VS Code untuk menulis kode.`,
        challenge: `Sebutkan 3 alat utama yang wajib disiapkan sebelum kamu mulai belajar koding web!`
      }
    ]
  },
  // Pengenalan Web
  {
    id: `pengenalan-web`,
    title: `Pengenalan Web`,
    category: `Tools`,
    description: `Memahami apa itu website dan cara menggabungkan komponennya.`,
    content: [
      {
        explanation: `Website bekerja seperti bangunan yang memiliki kerangka, hiasan, dan sistem otomatis.
        
- **HTML (Kerangka)**: Ibarat fondasi. Menentukan ada apa saja di dalam web (teks, gambar, tombol).
- **CSS (Hiasan)**: Ibarat cat dan dekorasi. Mengatur warna, ukuran, dan tata letak.
- **JS (Logika)**: Ibarat listrik dan sensor. Membuat web bisa berinteraksi.
- **Cara Membuat File**: Di VS Code, buat file baru berakhiran **.html** (contoh: \`index.html\`). Di sinilah kita mulai menulis kode pertama kita.`,
        code: `<!-- 3 Bagian Utama Website: -->
<!-- 1. HTML: Kerangka halaman (.html) -->
<!-- 2. CSS: Desain dan warna (.css) -->
<!-- 3. JS: Logika dan interaksi (.js) -->`,
        challenge: `Apa akhiran file (ekstensi) yang wajib digunakan saat kita pertama kali membuat file kerangka website?`
      },
      {
        explanation: `Kamu bisa menulis ketiga bahasa tersebut (HTML, CSS, JS) di dalam satu file atau dipisah-pisah.
        
- **Digabung (1 File)**: Sangat cocok untuk belajar atau proyek kecil. CSS ditaruh di dalam tag **<style>** dan JS ditaruh di dalam tag **<script>** langsung di dalam file HTML.
- **Dipisah (Beda File)**: Standar profesional. Kode lebih rapi dan file HTML tidak kepanjangan. Kamu membuat 3 file terpisah (misal: \`index.html\`, \`style.css\`, dan \`script.js\`).
- **Cara Menggabungkan (Integrasi)**: Jika dipisah, file HTML bertugas sebagai pemanggil. 
  - Gunakan tag **<link>** di bagian atas untuk memanggil CSS.
  - Gunakan tag **<script src="...">** di bagian bawah untuk memanggil JS.`,
        code: `<!-- Contoh Digabung (1 File): -->
<html>
  <head>
    <!-- CSS digabung di sini -->
    <style> h1 { color: blue; } </style>
  </head>
  <body>
    <h1>Halo!</h1>
    <!-- JS digabung di sini -->
    <script> alert("Selamat Datang!"); </script>
  </body>
</html>

<!-- ========================= -->
<!-- Contoh Dipisah (Beda File): -->
<html>
  <head>
    <!-- Memanggil file CSS eksternal -->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Halo!</h1>
    <!-- Memanggil file JS eksternal -->
    <script src="script.js"></script>
  </body>
</html>`,
        challenge: `Tag apa yang digunakan di dalam HTML untuk memanggil atau mengintegrasikan file CSS yang terpisah?`
      }
    ]
  },
  // 2. HTML Dasar
  {
    id: `html-intro`,
    title: `Pengenalan HTML`,
    category: `HTML`,
    description: `Mengenal HTML sebagai fondasi utama setiap halaman web.`,
    content: [
      {
        explanation: `HTML (Hyper Text Markup Language) adalah bahasa standar yang digunakan untuk membuat halaman web.
        
- **Fondasi Web**: HTML bukanlah bahasa pemrograman, melainkan bahasa *markup* yang digunakan untuk menentukan struktur halaman (seperti teks, gambar, dan tautan).
- **Elemen HTML**: HTML terdiri dari berbagai macam elemen atau "Tag" yang memberi tahu browser bagaimana cara menampilkan konten.
- **Kerangka Dasar**: Setiap website di dunia maya, tidak peduli seberapa canggih, pasti memiliki kerangka dasar HTML di baliknya.`,
        code: `<!-- Contoh dokumen HTML sederhana: -->
<!DOCTYPE html>
<html>
  <head>
    <title>Judul Web</title>
  </head>
  <body>
    <h1>Pengenalan HTML</h1>
    <p>Ini adalah halaman web pertamaku.</p>
  </body>
</html>`,
        challenge: `Apakah kepanjangan dari HTML?`
      }
    ]
  },
  {
    id: `html-dasar-1`,
    title: `Halaman HTML Pertama`,
    category: `HTML`,
    description: `Membuat kerangka dasar dokumen HTML.`,
    content: [
      {
        explanation: `Struktur dasar ini wajib ada di setiap file HTML agar browser tidak bingung.
        
- **<!DOCTYPE html>**: Deklarasi untuk memberitahu browser bahwa kita menggunakan standar **HTML5 (terbaru)**.
- **<html>**: Tag utama yang membungkus seluruh isi file. Semua kode harus ada di dalam sini.
- **<head>**: Bagian "kepala" atau otak. Berisi informasi rahasia yang tidak muncul di layar, seperti judul tab.
- **<title>**: Berada di dalam head, gunanya untuk memberi nama pada **tab browser** di bagian atas.
- **<body>**: Bagian "tubuh". Semua teks, gambar, dan link yang kamu tulis di sini akan **muncul di layar putih** website.`,
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Halaman Saya</title>
</head>
<body>
    <h1>Halo Dunia!</h1>
    <p>Selamat datang di website pertama saya.</p>
</body>
</html>`,
        challenge: `Bagian mana yang harus kita gunakan jika ingin menuliskan konten (seperti teks atau gambar) agar muncul di layar website?`
      }
    ]
  },
  {
    id: `html-dasar-2`,
    title: `Teks: Heading & Paragraf`,
    category: `HTML`,
    description: `Menampilkan judul dan tulisan di halaman web.`,
    content: [
      {
        explanation: `Ada dua jenis tag utama untuk menampilkan tulisan di website:
        
- **Heading (h1 - h6)**: Digunakan untuk membuat **Judul**. 
    - **h1**: Judul paling besar (utama).
    - **h2 - h6**: Judul yang semakin kecil ukurannya.
- **Paragraf (p)**: Digunakan untuk tulisan biasa atau **berita**. Browser otomatis memberi jarak baris baru antar paragraf.
- **Penting**: Gunakan heading hanya untuk judul, jangan gunakan h1 hanya karena ingin tulisannya terlihat tebal.`,
        code: `<h1>Ini Judul Utama</h1>
<h2>Ini Sub-judul</h2>
<p>Ini adalah sebuah paragraf teks yang berisi informasi panjang.</p>`,
        challenge: `Tag manakah yang lebih besar ukurannya secara otomatis, h1 atau h6?`
      }
    ]
  },
  {
    id: `html-dasar-3`,
    title: `Format Teks (Bold & Italic)`,
    category: `HTML`,
    description: `Memberikan gaya penekanan pada tulisan.`,
    content: [
      {
        explanation: `Terkadang kita perlu memberikan penekanan pada kata-kata tertentu agar pembaca lebih fokus.
        
- **<b> (Bold)**: Membuat teks menjadi **tebal** tanpa arti khusus.
- **<strong>**: Membuat teks menjadi **tebal** dan memberitahu browser bahwa kata ini **sangat penting**.
- **<i> (Italic)**: Membuat teks menjadi *miring* untuk istilah asing atau judul buku.
- **<em> (Emphasis)**: Membuat teks menjadi *miring* untuk memberikan penekanan nada bicara.
- **<mark>**: Memberikan efek **stabilo** atau sorotan kuning pada teks.`,
        code: `<p>Ini adalah teks <b>tebal</b> dan ini teks <i>miring</i>.</p>
<p>Kata ini <strong>sangat penting</strong> dan ini <mark>disorot</mark>.</p>`,
        challenge: `Tag manakah yang memberikan efek "stabilo" atau sorotan warna kuning pada teks?`
      }
    ]
  },
  {
    id: `html-dasar-4`,
    title: `Daftar (List)`,
    category: `HTML`,
    description: `Membuat daftar poin atau urutan angka.`,
    content: [
      {
        explanation: `Daftar membantu merapikan informasi agar tidak menumpuk seperti paragraf panjang.
        
- **<ul> (Unordered List)**: Membuat daftar dengan **poin bulat (bullet)**. Cocok untuk daftar yang urutannya boleh acak.
- **<ol> (Ordered List)**: Membuat daftar dengan **nomor (1, 2, 3)**. Cocok untuk langkah-langkah atau tutorial.
- **<li> (List Item)**: Tag wajib untuk menuliskan **isi setiap poinnya**. Tag li harus selalu ada di dalam ul atau ol.`,
        code: `<ul>
    <li>Susu</li>
    <li>Roti</li>
</ul>
<ol>
    <li>Bangun Tidur</li>
    <li>Mandi</li>
</ol>`,
        challenge: `Jika kamu ingin membuat daftar langkah-langkah yang ada urutan angkanya, tag apa yang harus digunakan?`
      }
    ]
  },
  {
    id: `html-dasar-5`,
    title: `Menyisipkan Gambar`,
    category: `HTML`,
    description: `Menampilkan foto atau ilustrasi di website.`,
    content: [
      {
        explanation: `Gambar membuat website jauh lebih menarik. Kita menggunakan tag **<img>** untuk ini.
        
- **<img>**: Tag ini spesial karena **tidak butuh penutup**.
- **src (Source)**: Atribut paling penting. Berisi **alamat (URL)** atau lokasi file gambar yang ingin ditampilkan.
- **alt (Alternative)**: Teks pengganti jika gambar gagal muncul. Sangat penting bagi pengguna yang menggunakan alat bantu baca (tunanetra).
- **width & height**: Atribut tambahan untuk mengatur **lebar dan tinggi** gambar (biasanya dalam satuan pixel).`,
        code: `<img src="https://picsum.photos/200" alt="Foto Kucing" width="200">`,
        challenge: `Di dalam tag <img>, atribut apa yang digunakan untuk memasukkan alamat atau link sumber gambarnya?`
      }
    ]
  },
  {
    id: `html-dasar-6`,
    title: `Membuat Tautan (Link)`,
    category: `HTML`,
    description: `Menghubungkan satu halaman ke halaman lainnya.`,
    content: [
      {
        explanation: `Link adalah "jembatan" yang menyatukan seluruh internet. 
        
- **<a> (Anchor)**: Tag dasar untuk membuat link. Teks di dalamnya akan otomatis bisa diklik.
- **href (Hypertext Reference)**: Atribut wajib yang berisi **alamat tujuan** link tersebut (misal: https://google.com).
- **target="_blank"**: Atribut agar link dibuka di **tab baru**, sehingga pengunjung tidak menutup websitemu.
- **title**: Muncul sebagai "Tooltip" atau teks kecil saat kamu mengarahkan kursor ke atas link tersebut.`,
        code: `<a href="https://google.com" target="_blank" title="Buka Google">Klik di Sini</a>`,
        challenge: `Apa nama atribut pada tag <a> yang berfungsi menyimpan alamat website tujuan link tersebut?`
      }
    ]
  },
  {
    id: `html-dasar-7`,
    title: `Tabel Sederhana`,
    category: `HTML`,
    description: `Menampilkan data dalam bentuk baris dan kolom.`,
    content: [
      {
        explanation: `Tabel digunakan untuk merapikan data seperti jadwal pelajaran atau daftar skor.
        
- **<table>**: Pembungkus utama seluruh area tabel.
- **<tr> (Table Row)**: Digunakan untuk membuat sebuah **baris** baru.
- **<td> (Table Data)**: Digunakan untuk membuat sebuah **kotak isi/sel** di dalam baris tersebut.
- **<th> (Table Header)**: Sama seperti td, tapi teksnya otomatis **tebal dan di tengah**, cocok untuk judul kolom.`,
        code: `<table border="1">
    <tr>
        <th>Nama</th>
        <th>Nilai</th>
    </tr>
    <tr>
        <td>Andi</td>
        <td>90</td>
    </tr>
</table>`,
        challenge: `Tag manakah yang berfungsi untuk membuat "Baris" baru di dalam sebuah tabel HTML?`
      }
    ]
  },
  {
    id: `html-dasar-8`,
    title: `Formulir Dasar`,
    category: `HTML`,
    description: `Tempat pengguna mengisi nama atau pesan.`,
    content: [
      {
        explanation: `Formulir adalah cara website menerima input atau data dari pengunjungnya.
        
- **<input>**: Kotak tempat kita bisa **mengetik**. Memiliki banyak "type".
- **type="text"**: Untuk mengetik teks biasa (nama, alamat, dll).
- **type="password"**: Otomatis menyembunyikan tulisan menjadi titik-titik agar aman.
- **placeholder**: Teks petunjuk yang akan hilang saat kita mulai mengetik.
- **<button>**: Tombol untuk mengirimkan data tersebut ke sistem.`,
        code: `<input type="text" placeholder="Nama">
<input type="password" placeholder="Password">
<button>Kirim</button>`,
        challenge: `Tag apa yang digunakan jika kita ingin membuat sebuah kotak tempat pengguna bisa mengetikkan sesuatu?`
      }
    ]
  },
  {
    id: `html-dasar-9`,
    title: `Komentar & Atribut Umum`,
    category: `HTML`,
    description: `Memberikan catatan pada kode dan memahami identitas elemen.`,
    content: [
      {
        explanation: `Sebagai koder, kita butuh catatan agar tidak lupa fungsi kode yang kita tulis.
        
- **Komentar (<!-- -->)**: Kode ini **tidak akan muncul** di browser. Hanya bisa dilihat di VS Code sebagai pengingat.
- **id**: Identitas **unik** untuk satu elemen saja. Ibaratnya seperti NIK atau nomor absen satu siswa.
- **class**: Identitas untuk **sekelompok** elemen. Ibaratnya seperti nama "Kelas 10A" yang dimiliki banyak siswa.
- **title**: Memberikan informasi tambahan saat mouse diletakkan di atas elemen tersebut.`,
        code: `<!-- Ini adalah komentar, tidak muncul di web -->
<h1 id="judul-utama" class="teks-merah" title="Ini Judul">Halo Dunia</h1>`,
        challenge: `Identitas manakah yang bersifat "unik" dan hanya boleh dimiliki oleh satu elemen saja, ID atau Class?`
      }
    ]
  },
  {
    id: `html-dasar-10`,
    title: `Block & Inline (Div & Span)`,
    category: `HTML`,
    description: `Memahami cara elemen menempati ruang di layar.`,
    content: [
      {
        explanation: `Setiap elemen HTML punya "sifat" bawaan dalam menempati ruang di layar.
        
- **Block Element**: Elemen yang selalu **memulai baris baru** dan memakan seluruh lebar layar (misal: h1, p, div).
- **Inline Element**: Elemen yang hanya memakan ruang **seperlunya** dan tidak membuat baris baru (misal: a, span, b).
- **<div>**: Wadah kosong tipe block. Digunakan untuk membungkus banyak elemen agar bisa diatur posisinya.
- **<span>**: Wadah kosong tipe inline. Digunakan untuk membungkus satu atau dua kata saja di dalam paragraf.`,
        code: `<div style="background: lightblue;">Ini Div (Block)</div>
<span style="background: yellow;">Ini Span (Inline)</span>`,
        challenge: `Manakah elemen yang sifatnya memakan seluruh lebar layar dan selalu membuat baris baru, Div atau Span?`
      }
    ]
  },
  {
    id: `html-dasar-11`,
    title: `Elemen Semantik (Layout)`,
    category: `HTML`,
    description: `Membuat struktur website yang bermakna dan rapi.`,
    content: [
      {
        explanation: `Gunakan tag yang memiliki "arti" agar Google dan browser lebih mudah memahami bagian websitemu.
        
- **<header>**: Bagian paling **atas** website (logo, judul, menu).
- **<nav>**: Bagian khusus untuk meletakkan **link navigasi** atau menu utama.
- **<main>**: Area untuk menaruh **konten utama** atau isi paling penting.
- **<aside>**: Bagian **samping** (sidebar). Cocok untuk iklan, link tambahan, atau biodata singkat.
- **<article>**: Konten yang bisa berdiri sendiri, seperti **berita** atau postingan blog.
- **<section>**: Digunakan untuk membagi isi halaman menjadi beberapa **bagian** atau bab.
- **<figure> & <figcaption>**: Digunakan untuk membungkus **gambar beserta judul/keterangan** gambarnya.
- **<details> & <summary>**: Digunakan untuk membuat konten yang bisa **dibuka-tutup** (seperti kotak penjelasan ini!).
- **<footer>**: Bagian paling **bawah** website (info kontak atau hak cipta).`,
        code: `<header>Logo Sekolah</header>
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
<footer>&copy; 2024 Pak Koding</footer>`,
        challenge: `Tag apakah yang digunakan untuk membuat konten yang bisa dibuka-tutup (collapsible) tanpa menggunakan JavaScript?`
      }
    ]
  },

  {
    id: `html-dasar-12`,
    title: `Alamat File & Favicon`,
    category: `HTML`,
    description: `Mengelola file dan ikon pada tab browser.`,
    content: [
      {
        explanation: `Cara kita memanggil file (seperti gambar) sangat menentukan apakah file tersebut muncul atau tidak.
        
- **Relative Path**: Memanggil file berdasarkan lokasi file HTML kita (misal: **"gambar.jpg"** jika satu folder).
- **Sub-folder**: Jika gambar ada di dalam folder, gunakan tanda miring (misal: **"images/logo.png"**).
- **Favicon**: Ikon kecil yang muncul di **tab browser**. Kita menggunakan tag **<link>** untuk memasangnya.
- **rel="icon"**: Atribut untuk memberitahu browser bahwa file ini adalah sebuah ikon.`,
        code: `<head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<img src="/images/semantic-layout.png" alt="Contoh Gambar">`,
        challenge: `Jika file gambar ada di dalam folder bernama "images", bagaimana cara menulis atribut src yang benar?`
      }
    ]
  },
  {
    id: `html-dasar-13`,
    title: `Desain Responsif (Viewport)`,
    category: `HTML`,
    description: `Membuat website agar tampil bagus di HP dan Laptop.`,
    content: [
      {
        explanation: `Website yang baik harus bisa dibuka dengan nyaman di layar kecil (HP) maupun layar lebar (Laptop).
        
- **Viewport**: Area tampilan website di layar pengguna.
- **Tag <meta name="viewport">**: Tag wajib di dalam **<head>** agar website tidak terlihat "kecil" saat dibuka di HP.
- **content="width=device-width"**: Instruksi agar lebar website mengikuti lebar layar perangkat pengguna.
- **initial-scale=1.0**: Instruksi agar saat pertama kali dibuka, zoom website berada di ukuran normal (100%).`,
        code: `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
        challenge: `Apa nama tag yang wajib diletakkan di dalam <head> agar website kita tampil bagus saat dibuka di HP?`
      }
    ]
  },
  {
    id: `html-dasar-14`,
    title: `Simbol & Entitas`,
    category: `HTML`,
    description: `Menampilkan karakter khusus yang tidak ada di keyboard.`,
    content: [
      {
        explanation: `Beberapa karakter tidak bisa diketik langsung karena sudah digunakan oleh kode HTML (seperti tanda < dan >).
        
- **&nbsp;**: Digunakan untuk memberikan **spasi paksa** (non-breaking space).
- **&lt; (Less Than)**: Digunakan untuk memunculkan simbol **kurang dari** (<).
- **&gt; (Greater Than)**: Digunakan untuk memunculkan simbol **lebih dari** (>).
- **&copy;**: Digunakan untuk memunculkan simbol **Copyright** (©).
- **&amp;**: Digunakan untuk memunculkan simbol **Dan** (&).`,
        code: `<p>Hak Cipta &copy; 2024 &nbsp; Pak Koding</p>
<p>Koding itu Seru &amp; Mudah!</p>`,
        challenge: `Kode entitas apa yang digunakan untuk memunculkan simbol Copyright (©) di website?`
      }
    ]
  },
  {
    id: `html-dasar-15`,
    title: `Iframe (Video & Map)`,
    category: `HTML`,
    description: `Memasukkan konten dari website lain ke websitemu.`,
    content: [
      {
        explanation: `Iframe memungkinkan kita "meminjam" jendela dari website lain, seperti YouTube atau Google Maps.
        
- **<iframe>**: Tag pembungkus untuk memunculkan halaman web lain di dalam halamanmu.
- **src**: Alamat video atau peta yang ingin kamu tampilkan.
- **frameborder**: Digunakan untuk menghilangkan atau memunculkan garis tepi di sekitar jendela iframe.
- **allowfullscreen**: Atribut agar pengunjung bisa menonton video dalam mode layar penuh (Full Screen).`,
        code: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="100%" height="315" frameborder="0" allowfullscreen></iframe>`,
        challenge: `Atribut apa yang digunakan untuk memasukkan alamat link video atau peta ke dalam tag <iframe>?`
      }
    ]
  },
  // 3. CSS Dasar
  {
    id: `css-intro`,
    title: `Pengenalan CSS`,
    category: `CSS`,
    description: `Mengenal CSS yang bertugas mempercantik halaman web.`,
    content: [
      {
        explanation: `CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk menghias dan mengatur tata letak halaman web.
        
- **Menghemat Pekerjaan**: Dengan CSS, kamu bisa mengatur warna tulisan, jenis huruf, hingga tata letak seluruh halaman web sekaligus.
- **Memisahkan Desain dan Struktur**: HTML fokus pada "Apa" yang ditampilkan, sedangkan CSS fokus pada "Bagaimana" tampilannya.
- **Fleksibel**: Kamu bisa membuat 1 file HTML, lalu mengubah penampilannya secara drastis hanya dengan mengganti file CSS-nya.`,
        code: `/* Contoh kode CSS: */
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}`,
        challenge: `Apa fungsi utama dari CSS dalam pembuatan website?`
      }
    ]
  },
  {
    id: `css-dasar-1`,
    title: `Cara Menempelkan CSS`,
    category: `CSS`,
    description: `Tiga cara memberikan warna pada halaman web.`,
    content: [
      {
        explanation: `CSS adalah bahasa desain. Ada beberapa cara menempelkan desain ke HTML:
        
- **Internal CSS**: Menulis kode di dalam tag **<style>** yang diletakkan di dalam **<head>**.
- **Inline CSS**: Menulis desain langsung di dalam atribut tag HTML menggunakan **style="..."**.
- **External CSS**: Cara paling profesional. Menulis desain di file terpisah (style.css) lalu dipanggil ke HTML.`,
        code: `<style>
    h1 { 
        color: red; 
        text-align: center;
    }
</style>`,
        challenge: `Di dalam tag apakah kita biasanya menuliskan kode CSS jika diletakkan langsung di dalam file HTML?`
      }
    ]
  },
  // ... rest of the CSS and JS topics ...
  {
    id: `css-dasar-2`,
    title: `Selector Dasar`,
    category: `CSS`,
    description: `Memilih bagian mana yang ingin dihias.`,
    content: [
      {
        explanation: `Selector digunakan untuk "menunjuk" elemen mana yang ingin kita kasih warna atau hiasan.
        
- **Tag Selector**: Menunjuk langsung nama tag-nya (misal: **h1**, **p**). Semua tag tersebut akan berubah.
- **Class Selector**: Menggunakan simbol **titik (.)**. Sangat fleksibel karena bisa dipakai berkali-kali.
- **ID Selector**: Menggunakan simbol **pagar (#)**. Hanya boleh dipakai sekali untuk satu elemen paling spesial.`,
        code: `<style>
    .teks-biru { color: blue; }
    #judul-utama { font-size: 40px; }
</style>
<h1 id="judul-utama" class="teks-biru">Halo!</h1>`,
        challenge: `Simbol apa yang digunakan di CSS untuk memanggil sebuah nama "Class"?`
      }
    ]
  },
  {
    id: `css-dasar-3`,
    title: `Warna & Latar`,
    category: `CSS`,
    description: `Mengatur warna tulisan dan warna kotak.`,
    content: [
      {
        explanation: `Mengatur warna adalah langkah pertama membuat web terlihat indah.
        
- **color**: Properti khusus untuk mengubah **Warna Teks/Tulisan**.
- **background-color**: Properti untuk mengubah **Warna Latar Belakang** elemen.
- **Format Warna**: Bisa pakai nama (red, blue) atau kode angka Hex (misal: #00ff00).`,
        code: `p { 
    color: white; 
    background-color: darkblue; 
    padding: 10px;
}`,
        challenge: `Properti CSS apa yang digunakan khusus untuk mengubah warna latar belakang sebuah elemen?`
      }
    ]
  },
  {
    id: `css-dasar-4`,
    title: `Ukuran & Font`,
    category: `CSS`,
    description: `Mengatur besar tulisan dan jenis huruf.`,
    content: [
      {
        explanation: `Tipografi atau pengaturan huruf sangat penting agar web nyaman dibaca.
        
- **font-size**: Mengatur **Besar/Kecilnya** tulisan (misal: 16px, 20px).
- **font-family**: Mengatur **Jenis Huruf** (misal: Arial, Roboto).
- **font-weight**: Mengatur **Ketebalan** huruf (normal atau bold).
- **text-align**: Mengatur **Posisi** teks (left, center, right).`,
        code: `h1 { 
    font-size: 30px; 
    font-family: Arial; 
    text-align: center; 
}`,
        challenge: `Bagaimana cara membuat teks berada tepat di posisi tengah halaman menggunakan CSS?`
      }
    ]
  },
  {
    id: `css-dasar-5`,
    title: `Jarak: Margin & Padding`,
    category: `CSS`,
    description: `Memberi ruang agar elemen tidak berdempetan.`,
    content: [
      {
        explanation: `Konsep "Kotak" di CSS sangat penting untuk mengatur jarak agar web tidak terlihat berantakan.
        
- **Padding**: Jarak **di dalam** kotak (antara teks dan garis tepi kotak).
- **Margin**: Jarak **di luar** kotak (jarak antar satu kotak dengan kotak lainnya).
- **Border**: Garis tepi kotak. Bisa diatur ketebalan (px) dan warnanya.`,
        code: `div { 
    border: 2px solid black;
    padding: 20px; 
    margin: 30px; 
}`,
        challenge: `Manakah yang memberikan jarak antara kotak satu dengan kotak lainnya di luarnya, Margin atau Padding?`
      }
    ]
  },
  {
    id: `css-box-model`,
    title: `Model Kotak (Box Model)`,
    category: `CSS`,
    description: `Memahami cara CSS menghitung ukuran elemen.`,
    content: [
      {
        explanation: `Semua elemen HTML pada dasarnya adalah kotak. Istilah "Box Model" digunakan saat membicarakan desain dan tata letak.
        
- **Content (Isi)**: Teks atau gambar yang ada di dalam elemen.
- **Padding**: Area transparan di sekeliling konten (di dalam garis tepi).
- **Border (Garis Tepi)**: Garis yang mengelilingi padding dan konten.
- **Margin**: Area transparan di luar border (jarak dengan elemen lain).`,
        code: `div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}`,
        challenge: `Bagian manakah dari Box Model yang letaknya berada paling luar dan memisahkan satu kotak dengan kotak lainnya?`
      }
    ]
  },
  {
    id: `css-borders`,
    title: `Garis Tepi (Borders & Outlines)`,
    category: `CSS`,
    description: `Menambahkan dan membentuk garis di sekitar elemen.`,
    content: [
      {
        explanation: `Properti border memungkinkanmu menentukan gaya, lebar, dan warna garis tepi elemen.
        
- **border-style**: Wajib ada! Nilainya bisa berupa "solid" (garis lurus), "dashed" (putus-putus), atau "dotted" (titik-titik).
- **border-radius**: Digunakan untuk membuat sudut kotak menjadi melengkung atau bulat.
- **Outline**: Mirip seperti border, tapi digambar di luar border dan tidak memakan ruang (tidak menambah ukuran kotak).`,
        code: `<style>
    .kotak-lengkung {
        border: 2px solid blue;
        border-radius: 10px;
        outline: 2px dashed red;
    }
</style>
<div class="kotak-lengkung">Kotak dengan Garis</div>`,
        challenge: `Properti apa yang digunakan untuk membuat sudut sebuah elemen menjadi melengkung atau bundar?`
      }
    ]
  },
  {
    id: `css-dimensions`,
    title: `Lebar & Tinggi (Dimensions)`,
    category: `CSS`,
    description: `Mengontrol ukuran kotak agar responsif.`,
    content: [
      {
        explanation: `Mengatur lebar (width) dan tinggi (height) adalah hal dasar, tetapi berpotensi merusak tampilan di layar HP jika salah cara.
        
- **width / height**: Mengatur ukuran elemen secara pasti (contoh: 500px).
- **max-width**: Sangat penting untuk web responsif! Jika layar lebih kecil dari max-width, elemen akan otomatis mengecil mengikuti layar (tidak terpotong).
- Jangan gunakan width tetap jika ingin webmu ramah perangkat seluler, gunakanlah max-width atau presentase (%).`,
        code: `.kotak-responsif {
    max-width: 500px; /* Maksimal 500px, tapi bisa mengecil di HP */
    width: 100%;      /* Penuhi layar yang tersedia */
    height: 200px;
    background-color: lightgreen;
}`,
        challenge: `Untuk membuat website responsif, manakah yang lebih aman digunakan agar elemen bisa mengecil di layar HP: width atau max-width?`
      }
    ]
  },
  {
    id: `css-text-format`,
    title: `Format Teks Lanjut`,
    category: `CSS`,
    description: `Lebih dari sekadar warna, mengatur teks seperti profesional.`,
    content: [
      {
        explanation: `Selain warna dan ukuran, CSS bisa mengubah bentuk dan spasi teks.
        
- **text-transform**: Bisa membuat teks jadi HURUF BESAR (uppercase), kecil semua (lowercase), atau Huruf Kapital Di Awal (capitalize).
- **text-decoration**: Digunakan untuk memberi garis (misal: underline atau menghapus garis dengan none).
- **letter-spacing / line-height**: Untuk mengatur jarak antar huruf (kerning) dan jarak antar baris teks agar lebih enak dibaca.`,
        code: `p {
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 2px;
    line-height: 1.5;
}`,
        challenge: `Properti CSS apa yang dapat mengubah teks biasa menjadi huruf besar (kapital) semua?`
      }
    ]
  },
  {
    id: `css-links-lists`,
    title: `Menghias Link & Daftar`,
    category: `CSS`,
    description: `Membuat tombol dari link dan merapikan daftar.`,
    content: [
      {
        explanation: `Link dan List (Daftar) memiliki gaya bawaan yang seringkali ingin kita ubah.
        
- **text-decoration: none**: Resep rahasia untuk menghilangkan garis bawah biru pada link (tag a).
- **list-style-type: none**: Menghilangkan titik hitam (bullet) bawaan dari tag ul dan li.
- Kamu bisa mengganti list-style-type dengan gambar atau bentuk lain seperti kotak (square).`,
        code: `<style>
    a {
        text-decoration: none;
        background-color: blue;
        color: white;
        padding: 5px 10px;
    }
    ul {
        list-style-type: square;
    }
</style>
<a href="#">Ini Tombol!</a>
<ul><li>Satu</li><li>Dua</li></ul>`,
        challenge: `Perintah CSS apa yang wajib kamu gunakan jika ingin menghilangkan garis bawah pada sebuah tautan (link)?`
      }
    ]
  },
  {
    id: `css-tables`,
    title: `Menghias Tabel`,
    category: `CSS`,
    description: `Membuat tabel HTML lebih rapi dan elegan.`,
    content: [
      {
        explanation: `Tabel HTML bawaan sangat kaku dan jelek. CSS menyulapnya jadi tabel profesional.
        
- **border-collapse: collapse**: Sangat penting! Menggabungkan garis ganda bawaan tabel menjadi satu garis tunggal yang rapi.
- **padding**: Memberi ruang lega di dalam sel tabel (th dan td).
- **nth-child(even)**: Trik membuat "Zebra Striping" (warna selang-seling) agar baris tabel mudah dibaca.`,
        code: `<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
<table>
    <tr><th>Nama</th><th>Kelas</th></tr>
    <tr><td>Budi</td><td>10A</td></tr>
    <tr><td>Siti</td><td>10B</td></tr>
</table>`,
        challenge: `Properti apa yang berfungsi untuk menghilangkan garis ganda (menyatukan garis) pada tepi tabel HTML?`
      }
    ]
  },
  {
    id: `css-display`,
    title: `Sifat Tampilan (Display)`,
    category: `CSS`,
    description: `Memahami Block, Inline, dan cara menyembunyikan elemen.`,
    content: [
      {
        explanation: `Setiap elemen HTML punya sifat tampilan bawaan. Properti display adalah pengaturnya.
        
- **block**: Elemen mengambil layar penuh kiri-ke-kanan dan selalu pindah baris baru (contoh: div, h1, p).
- **inline**: Elemen hanya mengambil ruang sebutuhnya dan tidak pindah baris (contoh: span, a). *Tidak bisa diatur tinggi/lebarnya!*
- **inline-block**: Berjejer ke samping seperti inline, tapi kamu BISA mengatur tinggi/lebarnya.
- **none**: Menyembunyikan elemen seolah-olah elemen itu tidak pernah ada di HTML.`,
        code: `<ul>
    <li style="display: inline-block; padding: 10px; background: orange;">Menu 1</li>
    <li style="display: inline-block; padding: 10px; background: yellow;">Menu 2</li>
</ul>
<div style="display: none;">Teks ini disembunyikan!</div>`,
        challenge: `Nilai apa pada properti display yang membuat elemen bisa berjejer ke samping TETAPI tetap bisa diubah tinggi dan lebarnya?`
      }
    ]
  },
  {
    id: `css-position`,
    title: `Posisi Elemen (Position)`,
    category: `CSS`,
    description: `Cara membebaskan elemen dari arus dokumen HTML.`,
    content: [
      {
        explanation: `Ingin membuat tombol yang selalu melayang di pojok layar? Gunakan position!
        
- **static**: Bawaan lahir. Mengikuti urutan HTML dari atas ke bawah.
- **relative**: Elemen tetap di tempatnya, tapi kamu bisa menggesernya sedikit menggunakan top, left, right, atau bottom.
- **absolute**: Melayang bebas dari dokumen, patokannya adalah elemen pembungkus terdekat yang posisinya relative.
- **fixed**: Menempel mati di layar meskipun di-scroll (cocok untuk Navbar).
- **sticky**: Seperti perpaduan relative dan fixed. Menempel di layar hanya ketika kamu menscroll melewatinya.`,
        code: `<div style="position: fixed; bottom: 20px; right: 20px; background: red; padding: 10px; color: white;">
    Bantuan?
</div>`,
        challenge: `Nilai posisi apakah yang membuat elemen akan terus menempel di layar HP/Laptopmu walau kamu menscroll halaman ke paling bawah?`
      }
    ]
  },
  {
    id: `css-zindex-overflow`,
    title: `Tumpukan & Meluap (Z-index & Overflow)`,
    category: `CSS`,
    description: `Mengontrol elemen yang bertumpuk dan isi yang kepanjangan.`,
    content: [
      {
        explanation: `Ketika menggunakan posisi (absolute/fixed), elemen bisa saling menumpuk.
        
- **z-index**: Menentukan siapa yang berada di depan. Elemen dengan z-index lebih besar akan menutupi yang kecil (misal: 10 menutupi 1).
- **overflow**: Apa yang terjadi jika isi teks lebih besar dari ukuran kotaknya?
    - visible (bawaan): Teks keluar kotak.
    - hidden: Teks yang keluar langsung dipotong.
    - scroll: Muncul scrollbar di dalam kotak.`,
        code: `<div style="width: 200px; height: 50px; overflow: scroll; border: 1px solid black;">
    Ini adalah teks yang sangat amat panjang sekali sehingga tidak akan muat di dalam kotak kecil ini dan akan memicu kemunculan scrollbar.
</div>`,
        challenge: `Jika kamu punya dua gambar yang posisinya saling bertumpuk, properti apa yang mengatur gambar mana yang berada di paling atas (depan)?`
      }
    ]
  },
  {
    id: `css-pseudo`,
    title: `Efek Interaktif (Pseudo-classes)`,
    category: `CSS`,
    description: `Membuat website hidup saat disentuh mouse.`,
    content: [
      {
        explanation: `Pseudo-classes digunakan untuk memberikan gaya khusus pada elemen ketika elemen tersebut dalam keadaan (state) tertentu.
        
- **:hover**: Berubah warna saat mouse/kursor diarahkan ke atasnya (sangat sering dipakai untuk tombol!).
- **:active**: Berubah warna pada detik saat elemen tersebut diklik/ditekan.
- **:focus**: Saat kolom input diklik untuk mulai mengetik.
- **:nth-child()**: Rumus sakti untuk memilih urutan tertentu (misal: warna berbeda untuk baris ganjil/genap pada tabel).`,
        code: `<style>
    button {
        background-color: blue;
        color: white;
        padding: 10px;
    }
    button:hover {
        background-color: red; /* Berubah merah saat disentuh mouse */
    }
</style>
<button>Sentuh Aku!</button>`,
        challenge: `Kata kunci pseudo-class apa yang digunakan untuk membuat perubahan pada tombol ketika kursor mouse kita menyentuh tombol tersebut?`
      }
    ]
  },
  {
    id: `css-units`,
    title: `Satuan Ukuran CSS`,
    category: `CSS`,
    description: `Lebih jauh dari sekadar Pixel (px).`,
    content: [
      {
        explanation: `CSS punya banyak satuan ukur selain Piksel (px) yang membuatnya lebih canggih.
        
- **px (Pixel)**: Ukuran pasti. Tidak akan membesar/mengecil sendiri.
- **% (Persen)**: Relatif terhadap ukuran pembungkusnya (misal: lebar 50% layar).
- **rem**: Relatif terhadap ukuran font akar (html). Sangat baik untuk ukuran huruf karena mendukung pengaturan zoom di HP.
- **vh & vw**: Viewport Height & Width. 100vh artinya tepat memakan 100% tinggi layar HP/Laptopmu, berapapun ukuran layarnya!`,
        code: `<div style="height: 100vh; background-color: purple; color: white;">
    Kotak ini tingginya persis sama dengan tinggi layarmu!
</div>`,
        challenge: `Satuan CSS apakah yang mengacu pada 1% dari tinggi layar perangkat yang digunakan oleh pengunjung?`
      }
    ]
  },
  {
    id: `css-specificity`,
    title: `Prioritas Kode (Specificity)`,
    category: `CSS`,
    description: `Hukum rimba CSS, siapa yang menang?`,
    content: [
      {
        explanation: `Jika kamu punya dua kode CSS yang mewarnai elemen yang sama, siapa yang menang? Inilah yang disebut "Specificity".
        
1. **Inline Style** (di dalam atribut HTML) mengalahkan segalanya.
2. **ID Selector** (#judul) mengalahkan Class.
3. **Class Selector** (.teks) mengalahkan Tag Selector.
4. **Tag Selector** (h1) adalah yang paling lemah.
- **!important**: Senjata pamungkas. Mengabaikan semua hukum di atas dan memaksa CSS menggunakan gaya tersebut (gunakan dengan bijak!).`,
        code: `<style>
    p { color: blue; }
    .hijau { color: green; }
    #merah { color: red; }
</style>
<!-- Ini akan berwarna merah karena ID lebih kuat dari Class dan Tag -->
<p id="merah" class="hijau">Teks ini warna apa hayo?</p>`,
        challenge: `Manakah pemilih (selector) yang paling kuat dan akan diprioritaskan oleh browser: Tag (p), Class (.hijau), atau ID (#merah)?`
      }
    ]
  },
  {
    id: `css-layout-1`,
    title: `Pengenalan Flexbox`,
    category: `CSS`,
    description: `Cara termudah menyusun kotak agar berjejer ke samping.`,
    content: [
      {
        explanation: `Flexbox adalah cara modern yang paling sering dipakai untuk menyusun tata letak website.
        
- **display: flex**: Perintah "Ajaib" yang membuat semua isi di dalam kotak otomatis **berjejer ke samping**.
- **justify-content**: Mengatur posisi horisontal (misal: center agar semua isi ke tengah).
- **gap**: Memberi jarak antar kotak yang sedang berjejer agar tidak menempel rapat.`,
        code: `<div style="display: flex; gap: 10px;">
    <div style="background: red;">Kiri</div>
    <div style="background: blue;">Kanan</div>
</div>`,
        challenge: `Nilai apa yang diberikan pada properti "display" agar elemen-elemen di dalamnya berjejer secara horizontal (ke samping)?`
      }
    ]
  },
  {
    id: `js-intro`,
    title: `Pengenalan JavaScript`,
    category: `JS`,
    description: `Mengenal otak yang membuat website menjadi interaktif.`,
    content: [
      {
        explanation: `JavaScript (JS) adalah bahasa pemrograman untuk halaman web yang bertugas mengatur interaktivitas dan logika.
        
- **Bahasa yang Hidup**: Jika HTML adalah kerangka dan CSS adalah kulit, maka JS adalah "otot" yang membuat website bisa bergerak dan merespon.
- **Apa yang bisa JS lakukan?**: JS bisa mengubah tulisan (HTML), mengubah desain (CSS), menghitung data, dan memvalidasi isian formulir.
- **Standar Web Modern**: Semua website canggih seperti YouTube, Instagram, dan Tokopedia menggunakan JavaScript.`,
        code: `// Contoh kode JavaScript:
// Mengubah teks saat halaman dimuat
document.getElementById("demo").innerHTML = "Halo dari JavaScript!";`,
        challenge: `Analogi apa yang tepat untuk JavaScript: Kerangka, Kulit, atau Otot?`
      }
    ]
  },
  {
    id: `js-dasar-1`,
    title: `Menulis JavaScript Pertama`,
    category: `JS`,
    description: `Memberi perintah agar website bisa melakukan sesuatu.`,
    content: [
      {
        explanation: `JavaScript membuat website hidup dan bisa melakukan aksi pintar.
        
- **Tag <script>**: Tempat kita menaruh semua perintah koding JavaScript di file HTML.
- **alert()**: Perintah untuk memunculkan **Pesan Pop-up** (kotak peringatan) di layar.
- **console.log()**: Perintah untuk memunculkan tulisan di bagian "Inspect" (untuk mengecek apakah kodinganmu benar).`,
        code: `<script>
    alert("Selamat Datang!");
</script>`,
        challenge: `Tag apakah yang digunakan untuk menuliskan kode JavaScript di dalam halaman web?`
      }
    ]
  },
  {
    id: `js-dasar-2`,
    title: `Variabel (Penyimpanan)`,
    category: `JS`,
    description: `Menyimpan data seperti nama atau angka.`,
    content: [
      {
        explanation: `Variabel adalah "Gelas" atau "Kotak" untuk menyimpan informasi sementara.
        
- **let**: Kata kunci untuk membuat variabel yang isinya **bisa berubah**.
- **const**: Kata kunci untuk membuat variabel yang isinya **tetap**.
- **= (Sama Dengan)**: Digunakan untuk **mengisi nilai** ke dalam variabel tersebut.`,
        code: `let namaSiswa = "Budi";
const tahunLahir = 2008;
console.log(namaSiswa);`,
        challenge: `Sebutkan salah satu kata kunci (keyword) yang digunakan untuk membuat variabel di JavaScript!`
      }
    ]
  },
  {
    id: `js-data-types`,
    title: `Tipe Data (Data Types)`,
    category: `JS`,
    description: `Mengenal jenis-jenis data seperti Teks dan Angka.`,
    content: [
      {
        explanation: `Sama seperti di dunia nyata, komputer harus bisa membedakan mana yang teks dan mana yang angka.
        
- **String**: Teks biasa. Selalu dibungkus dengan tanda kutip (contoh: "Halo", 'Pak Koding').
- **Number**: Angka. Ditulis langsung tanpa tanda kutip (contoh: 100, 3.14).
- **Boolean**: Hanya punya dua nilai mutlak: true (benar) atau false (salah). Sangat berguna untuk sakelar/kondisi.`,
        code: `let nama = "Siti";      // String
let umur = 16;          // Number
let sudahLulus = false; // Boolean

console.log(nama, umur, sudahLulus);`,
        challenge: `Tipe data apakah yang digunakan jika kita menuliskan nilai diapit oleh tanda kutip ganda atau tunggal?`
      }
    ]
  },
  {
    id: `js-arrays`,
    title: `Koleksi Data (Array)`,
    category: `JS`,
    description: `Menyimpan banyak data dalam satu variabel.`,
    content: [
      {
        explanation: `Bagaimana jika kamu punya 100 nama siswa? Membuat 100 variabel tentu sangat melelahkan. Array adalah solusinya!
        
- **Kurung Siku []**: Array ditandai dengan kurung siku.
- **Daftar Berurutan**: Array adalah daftar yang diurutkan dengan nomor (disebut index).
- **Dimulai dari 0**: Index pertama di komputer SELALU dimulai dari angka 0, bukan 1!`,
        code: `let buah = ["Apel", "Jeruk", "Mangga"];

// Memanggil buah pertama (Apel)
console.log(buah[0]); 

// Mengubah buah kedua menjadi Pisang
buah[1] = "Pisang";`,
        challenge: `Berapakah nomor index (urutan) dari item PERTAMA di dalam sebuah Array JavaScript?`
      }
    ]
  },
  {
    id: `js-objects`,
    title: `Objek (Objects)`,
    category: `JS`,
    description: `Menyimpan data kompleks yang memiliki atribut.`,
    content: [
      {
        explanation: `Jika Array seperti daftar belanja, maka Objek seperti KTP seseorang. Objek menyimpan data yang memiliki penjelasan (properti).
        
- **Kurung Kurawal {}**: Objek dibungkus menggunakan kurung kurawal.
- **Key-Value Pair**: Data disimpan berpasangan, ada nama properti (key) dan nilainya (value).
- **Titik (.)**: Cara paling mudah untuk memanggil nilai di dalam objek adalah menggunakan titik.`,
        code: `let siswa = {
    nama: "Budi",
    kelas: "10A",
    umur: 15
};

// Mengambil nama siswa
console.log(siswa.nama);`,
        challenge: `Simbol apakah yang paling umum digunakan untuk memanggil (mengakses) sebuah properti dari dalam objek JavaScript?`
      }
    ]
  },
  {
    id: `js-operators`,
    title: `Operator (Math & Logic)`,
    category: `JS`,
    description: `Menghitung angka dan membandingkan kebenaran.`,
    content: [
      {
        explanation: `JavaScript sangat jago matematika dan perbandingan.
        
- **Matematika Dasar**: Tambah (+), Kurang (-), Kali (*), dan Bagi (/).
- **Sisa Bagi (%)**: Disebut Modulo, berguna untuk mengecek bilangan genap/ganjil.
- **Perbandingan**: Digunakan untuk mengecek apakah dua nilai sama.
    - === (Sama Persis): Mengecek nilai DAN tipe datanya (SANGAT disarankan).
    - !== (Tidak Sama).`,
        code: `let a = 10;
let b = 5;

console.log(a + b);    // 15
console.log(a === 10); // true (benar)
console.log(b > 10);   // false (salah)`,
        challenge: `Operator apakah yang paling disarankan di JavaScript untuk mengecek apakah dua nilai itu "Sama Persis" nilainya maupun tipe datanya?`
      }
    ]
  },
  {
    id: `js-conditionals`,
    title: `Kondisi (If...Else)`,
    category: `JS`,
    description: `Membuat websitemu bisa mengambil keputusan.`,
    content: [
      {
        explanation: `Percabangan (If/Else) membuat programmu menjadi pintar. Ia bisa melakukan hal berbeda pada situasi yang berbeda.
        
- **if (jika)**: Mengecek apakah kondisinya BENAR (true). Jika benar, jalankan kode di dalam kurung kurawal {}.
- **else if (atau jika)**: Pengecekan kedua jika kondisi pertama salah.
- **else (selain itu)**: Pilihan terakhir jika semua kondisi sebelumnya salah.`,
        code: `let nilai = 85;

if (nilai > 90) {
    console.log("A - Luar Biasa!");
} else if (nilai > 75) {
    console.log("B - Lulus!");
} else {
    console.log("C - Belajar Lagi ya.");
}`,
        challenge: `Blok kode manakah yang akan dieksekusi sebagai jalan terakhir jika semua kondisi (if) sebelumnya bernilai salah (false)?`
      }
    ]
  },
  {
    id: `js-loops`,
    title: `Perulangan (Loops)`,
    category: `JS`,
    description: `Mengerjakan tugas ribuan kali dalam sedetik.`,
    content: [
      {
        explanation: `Komputer tidak pernah bosan. Jika kamu butuh mencetak tulisan 100 kali, jangan ditulis manual, gunakan Loop!
        
- **for**: Loop yang paling sering dipakai. Terdiri dari 3 bagian: titik awal, batas akhir, dan penambahan.
- **i++**: Singkatan dari "i = i + 1" (tambahkan 1 di setiap putaran).
- **while**: Berulang terus SELAMA kondisinya masih bernilai benar (true).`,
        code: `// Mencetak angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}`,
        challenge: `Perintah "i++" di dalam sebuah loop for memiliki fungsi yang sama dengan apa?`
      }
    ]
  },
  {
    id: `js-functions`,
    title: `Fungsi (Functions)`,
    category: `JS`,
    description: `Membuat pabrik kode yang bisa dipanggil ulang.`,
    content: [
      {
        explanation: `Fungsi adalah blok kode yang dirancang untuk melakukan tugas khusus. Kamu cukup menulisnya sekali, dan memanggilnya berkali-kali.
        
- **function**: Kata kunci untuk membuat fungsi.
- **Parameter**: Bahan baku yang dimasukkan ke dalam kurung () saat memanggil fungsi.
- **return**: "Hasil akhir" atau jawaban yang dikembalikan oleh fungsi tersebut ke tempat ia dipanggil.`,
        code: `// Membuat fungsi bernama tambahAngka
function tambahAngka(a, b) {
    return a + b;
}

// Memanggil fungsi
let hasil = tambahAngka(10, 5);
console.log("Hasilnya adalah: " + hasil);`,
        challenge: `Kata kunci apa yang digunakan di dalam fungsi untuk "mengembalikan" nilai hasil proses agar bisa disimpan di variabel lain?`
      }
    ]
  },
  {
    id: `js-dom-1`,
    title: `Memilih Elemen (DOM)`,
    category: `JS`,
    description: `Menghubungkan JavaScript dengan elemen HTML.`,
    content: [
      {
        explanation: `DOM adalah cara JS mengontrol elemen HTML yang sudah kita buat.
        
- **document**: Mewakili seluruh halaman websitemu.
- **getElementById()**: Cara paling populer untuk **Memilih** elemen berdasarkan nama ID-nya.
- **.innerHTML**: Properti untuk **Mengubah** tulisan di dalam elemen yang sudah dipilih.`,
        code: `<h1 id="judul">Teks Lama</h1>
<script>
    document.getElementById("judul").innerHTML = "Teks Baru!";
</script>`,
        challenge: `Apa fungsi utama dari perintah getElementById di JavaScript?`
      }
    ]
  },
  {
    id: `js-dom-css`,
    title: `Mengubah Gaya (DOM CSS)`,
    category: `JS`,
    description: `Menggunakan JS untuk mengubah desain elemen secara langsung.`,
    content: [
      {
        explanation: `JavaScript tidak hanya bisa mengubah teks HTML, tetapi juga bisa memaksa perubahan gaya CSS secara instan.
        
- **.style**: Properti sakti untuk mengakses CSS melalui JavaScript.
- **CamelCase**: Di JS, properti CSS yang menggunakan tanda hubung (seperti background-color) ditulis menyatu dengan huruf besar di tengah (backgroundColor).
- Berguna untuk membuat "Dark Mode" atau menyembunyikan elemen (display = "none").`,
        code: `<div id="kotak" style="width: 100px; height: 100px; background-color: blue;"></div>
<script>
    let elemenKotak = document.getElementById("kotak");
    // Mengubah warna menjadi merah muda
    elemenKotak.style.backgroundColor = "pink";
    // Mengubah bentuk jadi bulat
    elemenKotak.style.borderRadius = "50%";
</script>`,
        challenge: `Jika di CSS penulisannya adalah "font-size", bagaimanakah cara penulisannya saat diubah melalui properti .style di JavaScript?`
      }
    ]
  },
  {
    id: `js-events`,
    title: `Mendengarkan Aksi (Events)`,
    category: `JS`,
    description: `Menjalankan kode HANYA saat ada aksi dari pengguna.`,
    content: [
      {
        explanation: `Website yang interaktif bereaksi terhadap tindakan penggunanya, seperti klik, geser mouse, atau mengetik. Ini disebut "Events" (Peristiwa).
        
- **onclick**: Atribut HTML paling mudah untuk memanggil fungsi JS ketika elemen diklik.
- **addEventListener**: Cara profesional di dalam JS untuk "mendengarkan" aksi tanpa merusak HTML.
- Ada banyak aksi selain klik: onmouseover (mouse menyentuh), onkeydown (keyboard ditekan).`,
        code: `<button onclick="sapaPengguna()">Klik Saya!</button>

<script>
    function sapaPengguna() {
        alert("Terima kasih sudah mengklik!");
    }
</script>`,
        challenge: `Atribut HTML apa yang paling umum digunakan untuk mendeteksi saat sebuah elemen (seperti tombol) ditekan/diklik oleh pengguna?`
      }
    ]
  },
  {
    id: `js-forms`,
    title: `Mengambil Input (Forms)`,
    category: `JS`,
    description: `Membaca apa yang diketikkan pengguna di kotak input.`,
    content: [
      {
        explanation: `Interaksi paling penting di web adalah mengambil data formulir (seperti login atau pencarian).
        
- **.value**: Kunci utama! Digunakan untuk mengambil (atau mengubah) teks yang sedang diketik di dalam kotak <input>.
- Biasanya digabungkan dengan event onclick pada tombol "Kirim" untuk memproses data tersebut.`,
        code: `<input type="text" id="namaInput" placeholder="Ketik namamu...">
<button onclick="tampilkanNama()">Sapa Saya</button>

<script>
    function tampilkanNama() {
        // Mengambil isi teks dari kotak input
        let nama = document.getElementById("namaInput").value;
        alert("Halo, " + nama + "!");
    }
</script>`,
        challenge: `Properti sakti apa yang digunakan pada elemen input di JavaScript untuk mendapatkan teks yang diketikkan oleh pengguna?`
      }
    ]
  },
  {
    id: `koding-intro`,
    title: `Pengenalan Koding`,
    category: `Koding`,
    description: `Apa sebenarnya arti dari "Koding" dan mengapa penting?`,
    content: [
      {
        explanation: `Koding (Coding) adalah aktivitas menulis instruksi dalam bahasa yang bisa dipahami oleh komputer agar komputer tersebut melakukan sesuatu sesuai keinginan kita.
        
- **Analogi Resep Masakan**: Bayangkan komputer adalah koki yang sangat patuh. Koding adalah "resep" yang kamu tulis agar si koki bisa memasak makanan yang kamu mau.
- **Bahasa Khusus**: Kita tidak bisa berbicara dengan komputer menggunakan bahasa sehari-hari. Kita harus menggunakan "bahasa pemrograman" yang memiliki aturan penulisan yang sangat ketat.
- **Dimana-mana**: Hampir semua teknologi yang kamu gunakan sehari-hari (HP, aplikasi, game, website) berjalan berkat koding.`,
        code: `// Contoh "instruksi" untuk komputer:
// 1. Tampilkan tulisan di layar
console.log("Halo Dunia!");

// 2. Hitung matematika
console.log(10 + 5);`,
        challenge: `Analogi apakah yang cocok untuk menjelaskan hubungan antara koding (sebagai instruksi) dan komputer (sebagai pelaksana)?`
      }
    ]
  },
  {
    id: `koding-vs-programming`,
    title: `Perbedaan Koding dan Pemrograman`,
    category: `Koding`,
    description: `Apakah koding dan pemrograman itu sama? Ternyata tidak!`,
    content: [
      {
        explanation: `Banyak orang menganggap "Koding" dan "Pemrograman" itu sama. Ternyata, koding hanyalah SALAH SATU bagian kecil dari pemrograman.
        
- **Koding (Coding)**: Fokus pada MENULIS kode. Ini adalah aktivitas mengetik instruksi ke dalam komputer.
- **Pemrograman (Programming)**: Proses yang JAUH lebih luas. Mencakup perencanaan, analisis masalah, desain solusi, penulisan kode (koding), pengujian (testing), dan pemeliharaan.
- **Ibarat Membangun Rumah**: Koding itu seperti tukang batu yang memasang bata. Pemrograman adalah seluruh proses dari arsitek menggambar denah, memilih material, hingga rumah selesai dibangun.`,
        code: `// Koding = Menulis instruksi
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log("Luas: " + luas);

// Pemrograman = Berpikir + Merencanakan + Koding + Testing`,
        challenge: `Manakah yang cakupannya lebih luas: Koding atau Pemrograman?`
      }
    ]
  },
  {
    id: `koding-flow`,
    title: `Alur Koding`,
    category: `Koding`,
    description: `Langkah-langkah yang dilalui seorang programmer saat bekerja.`,
    content: [
      {
        explanation: `Sebelum langsung mengetik kode, ada alur (flow) yang biasa diikuti oleh programmer profesional agar hasilnya terstruktur dan minim error.
        
- **1. Pahami Masalah**: Apa yang ingin diselesaikan? (Contoh: Membuat kalkulator sederhana)
- **2. Rancang Solusi (Algoritma)**: Tulis langkah-langkah penyelesaiannya secara logis, belum perlu pakai bahasa pemrograman.
- **3. Tulis Kode**: Terjemahkan algoritma tadi ke dalam bahasa pemrograman.
- **4. Uji (Testing)**: Jalankan kode dan periksa apakah hasilnya sudah benar.
- **5. Perbaiki (Debugging)**: Jika ada error atau hasil yang salah, temukan dan perbaiki kesalahannya.`,
        code: `// Contoh Alur: Membuat program penjumlahan
// 1. Masalah: Menjumlahkan dua angka
// 2. Algoritma: Ambil angka A, ambil angka B, jumlahkan
// 3. Kode:
let angkaA = 7;
let angkaB = 3;
let hasil = angkaA + angkaB;
// 4. Testing:
console.log("Hasil: " + hasil); // Harus 10
// 5. Debug: Jika hasilnya bukan 10, periksa kodenya!`,
        challenge: `Apa nama langkah terakhir dalam alur koding yang bertujuan untuk menemukan dan memperbaiki kesalahan pada kode?`
      }
    ]
  },
  {
    id: `koding-languages`,
    title: `Bahasa Pemrograman`,
    category: `Koding`,
    description: `Mengenal berbagai bahasa yang digunakan untuk berkomunikasi dengan komputer.`,
    content: [
      {
        explanation: `Sama seperti manusia yang berbicara dalam berbagai bahasa (Indonesia, Inggris, Jepang), komputer juga punya banyak bahasa pemrograman. Setiap bahasa punya kelebihan masing-masing.
        
- **Python**: Bahasa yang paling mudah dipelajari pemula, sangat populer untuk AI dan Data Science.
- **JavaScript**: Raja-nya website. Digunakan untuk membuat website interaktif (frontend & backend).
- **Java**: Banyak dipakai untuk aplikasi Android dan sistem perusahaan besar.
- **C / C++**: Bahasa yang sangat cepat, digunakan untuk membuat game, sistem operasi, dan perangkat keras.
- **PHP**: Bahasa khusus untuk server website (backend), dipakai oleh WordPress dan Facebook versi awal.`,
        code: `// Bahasa JavaScript
console.log("Halo dari JavaScript!");

// Bahasa Python (contoh saja, tidak jalan di sini)
// print("Halo dari Python!")

// Bahasa Java (contoh saja)
// System.out.println("Halo dari Java!");`,
        challenge: `Bahasa pemrograman apa yang paling populer digunakan untuk membuat website menjadi interaktif?`
      }
    ]
  },
  {
    id: `koding-daily-life`,
    title: `Contoh Koding di Kehidupan Sehari-hari`,
    category: `Koding`,
    description: `Tanpa sadar, kita sudah dikelilingi oleh hasil koding setiap hari.`,
    content: [
      {
        explanation: `Koding bukan hanya tentang layar hitam dan tulisan-tulisan aneh. Hasil koding sudah menjadi bagian dari kehidupan sehari-hari kita tanpa kita sadari!
        
- **Media Sosial**: Instagram, TikTok, YouTube — semuanya dibangun dengan koding. Fitur like, komentar, dan filter wajah semuanya adalah kode.
- **Game**: Dari game HP sederhana seperti Candy Crush hingga game PC besar seperti Minecraft — semua diprogram oleh programmer.
- **Ojek Online**: Gojek dan Grab menggunakan koding untuk menghitung jarak, menentukan harga, dan mencocokkan pengemudi.
- **E-Commerce**: Shopee, Tokopedia — fitur keranjang belanja, pembayaran, dan rekomendasi produk semuanya berkat koding.
- **Mesin ATM & Kasir Otomatis**: Mesin-mesin ini juga diprogram agar bisa memproses transaksi.`,
        code: `// Contoh logika sederhana di balik Ojek Online:
let jarak = 5; // km
let hargaPerKm = 3000;
let totalHarga = jarak * hargaPerKm;

console.log("Jarak: " + jarak + " km");
console.log("Total Ongkos: Rp" + totalHarga);`,
        challenge: `Sebutkan salah satu contoh penerapan koding di kehidupan sehari-hari yang berhubungan dengan transportasi!`
      }
    ]
  },
  {
    id: `koding-analogy`,
    title: `Pengibaratan Koding di Sekitar Kita`,
    category: `Koding`,
    description: `Memahami koding lebih mudah dengan perumpamaan dari dunia nyata.`,
    content: [
      {
        explanation: `Konsep koding sebenarnya sudah ada di sekitar kita dalam bentuk yang berbeda. Berikut beberapa perumpamaan yang memudahkan pemahaman:
        
- **Resep Masakan = Algoritma**: Langkah-langkah memasak yang tertulis secara berurutan, dari menyiapkan bahan hingga menyajikan makanan. Komputer melakukan hal yang sama!
- **Lampu Lalu Lintas = Kondisi (If/Else)**: Jika lampu hijau, maka jalan. Jika lampu merah, maka berhenti. Ini persis seperti logika "if...else" di koding.
- **Daftar Absensi = Array**: Daftar nama siswa yang tersusun berurutan dari nomor 1 hingga terakhir, mirip dengan cara Array menyimpan data.
- **Bel Sekolah = Event (Peristiwa)**: Saat bel berbunyi, siswa melakukan aksi tertentu (masuk kelas / pulang). Sama seperti "Event" di pemrograman web.`,
        code: `// Lampu Lalu Lintas = If/Else
let warna = "hijau";

if (warna === "merah") {
    console.log("BERHENTI!");
} else if (warna === "kuning") {
    console.log("HATI-HATI...");
} else {
    console.log("JALAN!");
}`,
        challenge: `Konsep koding apakah yang paling mirip dengan cara kerja lampu lalu lintas (merah = berhenti, hijau = jalan)?`
      }
    ]
  },
  {
    id: `koding-algorithm`,
    title: `Algoritma (Cara Berpikir Komputer)`,
    category: `Koding`,
    description: `Langkah-langkah logis yang menjadi fondasi semua program.`,
    content: [
      {
        explanation: `Algoritma adalah jantung dari semua pemrograman. Ia adalah urutan langkah-langkah logis dan terstruktur untuk menyelesaikan suatu masalah.
        
- **Harus Jelas**: Setiap langkah tidak boleh ambigu (bermakna ganda).
- **Harus Berurutan**: Langkah-langkahnya dilakukan dari atas ke bawah secara teratur.
- **Harus Berakhir**: Algoritma harus punya titik selesai, tidak boleh berjalan tanpa henti.
- **Contoh**: Algoritma menyeduh kopi: (1) Siapkan gelas, (2) Masukkan kopi, (3) Tuang air panas, (4) Aduk, (5) Kopi siap diminum.`,
        code: `// Algoritma: Menentukan bilangan genap atau ganjil
let angka = 8;

// Langkah 1: Ambil angka
// Langkah 2: Bagi dengan 2, cek sisanya
if (angka % 2 === 0) {
    // Langkah 3a: Jika sisa = 0, maka genap
    console.log(angka + " adalah bilangan GENAP");
} else {
    // Langkah 3b: Jika sisa bukan 0, maka ganjil
    console.log(angka + " adalah bilangan GANJIL");
}`,
        challenge: `Sebutkan 3 syarat utama agar sesuatu bisa disebut sebagai algoritma yang baik!`
      }
    ]
  },
  {
    id: `ai-definisi`,
    title: `Definisi Artificial Intelligence (AI)`,
    category: `AI`,
    description: `Apa itu AI? Mengenal mesin yang bisa "berpikir".`,
    content: [
      {
        explanation: `Artificial Intelligence (AI) atau Kecerdasan Buatan adalah cabang ilmu komputer yang bertujuan menciptakan mesin atau sistem yang mampu meniru kemampuan kognitif manusia.
        
- **Bisa Belajar**: AI bisa mempelajari pola dari data yang diberikan kepadanya.
- **Bisa Bernalar**: AI mampu mengambil keputusan berdasarkan informasi yang sudah diprosesnya.
- **Bukan Sekedar Program Biasa**: Program biasa mengikuti aturan yang kaku (jika A maka B). AI lebih fleksibel — ia bisa memproses data untuk menemukan pola dan membuat prediksi sendiri.
- **Contoh Nyata**: ChatGPT bisa menjawab pertanyaan, Google Translate bisa menerjemahkan bahasa, dan mobil Tesla bisa menyetir sendiri — semua berkat AI.`,
        code: `// Simulasi sederhana: AI menebak kategori usia
let umur = 15;
let kategori;

if (umur < 12) {
    kategori = "Anak-anak";
} else if (umur < 18) {
    kategori = "Remaja";
} else {
    kategori = "Dewasa";
}

console.log("Umur " + umur + " = " + kategori);
// AI sungguhan melakukan ini JAUH lebih kompleks!`,
        challenge: `AI adalah singkatan dari apa? Dan apa tujuan utama dari teknologi AI?`
      }
    ]
  },
  {
    id: `ai-history`,
    title: `Sejarah dan Konsep Utama AI`,
    category: `AI`,
    description: `Siapa yang pertama kali menciptakan konsep AI dan bagaimana cara kerjanya.`,
    content: [
      {
        explanation: `Konsep AI sudah ada sejak puluhan tahun yang lalu dan terus berkembang hingga saat ini.
        
- **Bapak AI**: Konsep Artificial Intelligence diperkenalkan oleh **John McCarthy** pada tahun 1956 di sebuah konferensi di Dartmouth College.
- **Komponen Utama**: AI bekerja menggunakan kombinasi tiga teknologi kunci:
    - **Algoritma**: Aturan dan langkah-langkah logis untuk memproses data.
    - **Machine Learning (ML)**: Kemampuan komputer untuk belajar dari data tanpa diprogram secara eksplisit.
    - **Deep Learning (DL)**: Bagian lebih dalam dari ML yang menggunakan "jaringan saraf tiruan" untuk memproses data rumit.
- **Perkembangan**: Dari yang awalnya hanya bisa bermain catur (Deep Blue, 1997), kini AI bisa membuat gambar, menulis kode, dan berbicara seperti manusia.`,
        code: `// Timeline singkat AI:
let timeline = [
    { tahun: 1956, peristiwa: "John McCarthy mencetuskan istilah AI" },
    { tahun: 1997, peristiwa: "Deep Blue (IBM) mengalahkan juara catur" },
    { tahun: 2011, peristiwa: "Siri (Apple) diluncurkan" },
    { tahun: 2022, peristiwa: "ChatGPT menggemparkan dunia" }
];

timeline.forEach(function(item) {
    console.log(item.tahun + ": " + item.peristiwa);
});`,
        challenge: `Siapakah nama ilmuwan yang dikenal sebagai "Bapak AI" karena memperkenalkan konsep Artificial Intelligence?`
      }
    ]
  },
  {
    id: `ai-branches`,
    title: `Cabang Teknologi AI`,
    category: `AI`,
    description: `Mengenal Machine Learning, Deep Learning, dan NLP.`,
    content: [
      {
        explanation: `AI memiliki beberapa cabang teknologi utama yang masing-masing punya keahlian berbeda:
        
- **Machine Learning (ML)**: Kemampuan komputer untuk belajar dari data dan pengalaman tanpa diprogram secara eksplisit. Contoh: Spotify merekomendasikan lagu berdasarkan apa yang sering kamu dengar.
- **Deep Learning (DL)**: Bagian dari ML yang menggunakan jaringan saraf tiruan (neural networks) untuk meniru cara kerja otak manusia dalam memproses data rumit. Contoh: Pengenalan wajah di HP.
- **Natural Language Processing (NLP)**: Teknologi yang memungkinkan mesin memahami, menafsirkan, dan menghasilkan bahasa manusia. Contoh: Google Translate, ChatGPT, dan asisten suara.`,
        code: `// Ilustrasi cabang AI:
let cabangAI = {
    "Machine Learning": "Belajar dari data (rekomendasi Spotify)",
    "Deep Learning": "Neural network (pengenalan wajah)",
    "NLP": "Memahami bahasa manusia (ChatGPT)"
};

for (let cabang in cabangAI) {
    console.log(cabang + ": " + cabangAI[cabang]);
}`,
        challenge: `Cabang AI apakah yang memungkinkan mesin untuk memahami dan menghasilkan bahasa manusia seperti pada Google Translate?`
      }
    ]
  },
  {
    id: `ai-types`,
    title: `Jenis-Jenis AI`,
    category: `AI`,
    description: `Dari AI paling sederhana hingga yang memiliki kesadaran diri.`,
    content: [
      {
        explanation: `Berdasarkan kemampuannya, AI dibagi menjadi beberapa jenis (tingkatan):
        
- **Reactive Machines (Mesin Reaktif)**: AI paling dasar yang hanya bereaksi terhadap situasi saat ini tanpa menyimpan memori. Contoh: Deep Blue (mesin catur IBM).
- **Limited Memory (Memori Terbatas)**: AI yang bisa menggunakan data masa lalu untuk meningkatkan prediksi di masa depan. Contoh: Mobil self-driving yang belajar dari data jalanan.
- **Theory of Mind (Teori Pikiran)**: AI yang mampu memahami emosi, niat, dan pemikiran manusia. Status: Masih dalam tahap pengembangan dan penelitian.
- **Self-Awareness (Kesadaran Diri)**: AI yang memiliki kesadaran layaknya manusia. Status: Masih berupa konsep teoretis, belum ada di dunia nyata.`,
        code: `// Jenis-jenis AI dan levelnya:
let jenisAI = [
    { level: 1, nama: "Reactive Machines", contoh: "Deep Blue (Catur)" },
    { level: 2, nama: "Limited Memory", contoh: "Mobil Tesla Autopilot" },
    { level: 3, nama: "Theory of Mind", contoh: "Masih dikembangkan" },
    { level: 4, nama: "Self-Awareness", contoh: "Belum ada (konsep)" }
];

jenisAI.forEach(function(ai) {
    console.log("Level " + ai.level + ": " + ai.nama);
    console.log("  Contoh: " + ai.contoh);
});`,
        challenge: `Jenis AI manakah yang sudah bisa menggunakan data masa lalu untuk membuat prediksi, seperti pada mobil self-driving?`
      }
    ]
  },
  {
    id: `ai-applications`,
    title: `Contoh Penerapan AI Sehari-hari`,
    category: `AI`,
    description: `AI sudah ada di sekitarmu — dari HP hingga media sosial!`,
    content: [
      {
        explanation: `AI bukan hanya teknologi masa depan. Ia sudah sangat dekat dengan kehidupan sehari-hari kita:
        
- **Asisten Virtual**: Apple Siri, Google Assistant, dan Amazon Alexa bisa menjawab pertanyaan dan mengontrol perangkat menggunakan suara.
- **Navigasi / GPS**: Google Maps dan Waze menggunakan AI untuk menghitung rute tercepat dan memprediksi kemacetan secara real-time.
- **Media Sosial & Hiburan**: YouTube dan TikTok merekomendasikan video berdasarkan kebiasaan menontonmu. Filter Instagram juga menggunakan AI pengenalan wajah.
- **Layanan Konsumen**: Chatbot pada e-commerce (Shopee, Tokopedia) menjawab pertanyaan pelanggan secara otomatis.
- **Keamanan**: Pengenalan wajah (Face ID) di smartphone menggunakan Deep Learning untuk mengenali pemilik HP.`,
        code: `// AI di sekitar kita:
let contohAI = [
    "Siri & Google Assistant (Asisten Suara)",
    "Google Maps (Prediksi Rute & Macet)",
    "YouTube & TikTok (Rekomendasi Video)",
    "Face ID di iPhone (Pengenalan Wajah)",
    "Chatbot Shopee (Layanan Otomatis)"
];

console.log("=== AI di Kehidupan Sehari-hari ===");
contohAI.forEach(function(contoh, i) {
    console.log((i + 1) + ". " + contoh);
});`,
        challenge: `Teknologi AI apa yang digunakan oleh Google Maps untuk membantu penggunanya menemukan jalan tercepat dan menghindari kemacetan?`
      }
    ]
  },
  {
    id: `ai-ethics`,
    title: `Dampak, Etika, dan Risiko AI`,
    category: `AI`,
    description: `AI sangat bermanfaat, tetapi juga memiliki sisi gelap yang perlu diwaspadai.`,
    content: [
      {
        explanation: `Seperti teknologi lainnya, AI memiliki dua sisi: manfaat luar biasa DAN risiko yang harus dikelola secara bertanggung jawab.
        
**Manfaat AI:**
- **Otomatisasi & Efisiensi**: Menangani tugas-tugas berulang secara cepat tanpa lelah (misal: sortir email, input data).
- **Ketersediaan 24/7**: Chatbot dan asisten digital siap melayani pengguna kapan saja tanpa istirahat.
- **Personalisasi**: Memberikan rekomendasi yang sangat sesuai dengan selera pengguna (misal: rekomendasi musik di Spotify atau film di Netflix).
- **Pengolahan Data Besar**: Mampu menganalisis jutaan data dalam sekejap untuk menemukan pola yang tidak terlihat oleh manusia.
- **Kesehatan & Sains**: Membantu dokter mendeteksi penyakit lebih awal lewat scan medis dan mempercepat penemuan obat-obatan baru.
- **Keamanan**: Mendeteksi aktivitas mencurigakan secara real-time untuk mencegah penipuan perbankan (fraud detection).

**Risiko & Etika AI:**
- **Bias Data**: Jika data yang digunakan untuk melatih AI mengandung bias (prasangka), maka keputusan AI juga akan bias.
- **Privasi**: AI yang mengumpulkan data pribadi menimbulkan kekhawatiran tentang keamanan privasi pengguna.
- **Pengangguran**: Otomatisasi oleh AI berpotensi menggantikan beberapa jenis pekerjaan manusia.
- **Deepfake**: Teknologi AI bisa digunakan untuk membuat video atau audio palsu yang sangat meyakinkan.`,
        code: `// Daftar manfaat AI yang lebih lengkap:
let infoAI = {
    manfaat: [
        "Otomatisasi tugas berulang (Efisien)",
        "Melayani 24/7 tanpa henti (Chatbot)",
        "Rekomendasi sesuai selera (Personalisasi)",
        "Analisis jutaan data dalam sekejap",
        "Deteksi penyakit & obat baru (Medis)",
        "Mencegah penipuan bank (Keamanan)"
    ],
    risiko: [
        "Bias dalam pengambilan keputusan",
        "Ancaman terhadap privasi data",
        "Potensi menggantikan pekerjaan manusia"
    ]
};

console.log("=== MANFAAT UTAMA AI ===");
infoAI.manfaat.forEach((m, i) => console.log((i+1) + ". " + m));

console.log("\n=== RISIKO & ETIKA ===");
infoAI.risiko.forEach(r => console.log("- " + r));`,
        challenge: `Sebutkan salah satu risiko atau masalah etika yang perlu diwaspadai dalam penggunaan teknologi AI!`
      }
    ]
  },
  {
    id: `proyek-akhir`,
    title: `Proyek Akhir`,
    category: `Tools`,
    description: `Waktunya merakit semua ilmu yang sudah dipelajari.`,
    content: [
      {
        explanation: `Inilah saatnya merakit semua yang sudah dipelajari menjadi satu website utuh.
        
- **Struktur**: Gunakan HTML untuk membuat kerangka biodatamu.
- **Hiasan**: Gunakan CSS agar warnanya menarik dan posisinya rapi.
- **Interaksi**: Gunakan JS jika ingin ada pesan rahasia saat foto diklik.`,
        code: `<!-- Proyek Biodata Saya -->
<h1>Halo, Nama Saya...</h1>`,
        challenge: `Sebutkan 3 teknologi utama (bahasa) yang kamu gabungkan untuk membuat proyek akhir ini!`
      }
    ]
  },
  {
    id: `penutup`,
    title: `Penutup`,
    category: `Tools`,
    description: `Selamat! Kamu sudah menyelesaikan dasar koding web.`,
    content: [
      {
        explanation: `Perjalananmu baru saja dimulai. Teruslah berkarya!
        
- **Latihan**: Semakin sering kamu mengetik, kamu akan semakin jago.
- **Sabar**: Jika ada yang error, periksa kembali penulisan tag dan titik komanya.
- **Bangga**: Kamu sudah bisa membuat website dari nol!`,
        code: `// Teruslah Bersemangat!`,
        challenge: `Apa rencana selanjutnya setelah kamu berhasil menyelesaikan materi dasar koding ini?`
      }
    ]
  }
];
