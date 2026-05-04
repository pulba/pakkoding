---
title: "Minta AI Baca Buku Tebal"
category: Prompting
order: 109
description: "Rangkum dokumen atau PDF ratusan halaman hanya dalam hitungan detik."
content:
  - explanation: |
      **Kenapa Skill Ini Krusial?**
      Membaca dokumen panjang (jurnal, PDF laporan, buku tebal) memakan waktu berhari-hari. AI bisa mengekstrak data spesifik dalam hitungan detik jika prompt-nya tepat.
      
      **Formula Prompt Engineering: Minta AI Baca Buku Tebal**
      Untuk menguasai teknik ini, jangan pernah mengetik asal. Gunakan struktur framework berikut:
      
      `[Sumber Data] + [Tujuan Ekstraksi] + [Metode Triangulasi] + [Format Output]`
      
      **Bedah Komponen Formula:**
      - **Sumber Data**:  Teks atau dokumen yang di-paste/diunggah.
      - **Tujuan Ekstraksi**:  Informasi pasti yang dicari (Metodologi, hasil, kesimpulan).
      - **Metode Triangulasi**:  Minta AI menyertakan nomor halaman atau kutipan asli agar tidak halusinasi.
      - **Format Output**:  Tabel ringkasan, bullet points, atau Q&A.
      
      **Studi Kasus: Amatir vs Master**
      ❌ **Prompt Jelek (Amatir):**
      _Tolong rangkum teks ini. [Paste Teks]_
      (Output AI akan generik, membosankan, dan tidak bisa langsung dipakai).
      
      ✅ **Prompt Master (Prompt Engineering):**
      _Berdasarkan dokumen laporan yang saya unggah ini, tolong temukan 3 masalah utama perusahaan dan solusi yang diusulkan. Sertakan kutipan kalimat aslinya (exact quote) sebagai bukti. Buatkan dalam format Tabel dengan kolom: Masalah, Solusi, Kutipan Asli._
      
      **Simulasi Hasil Output AI:**
      AI tidak memberikan ringkasan generik yang mengabaikan detail penting, melainkan tabel presisi lengkap dengan bukti kutipan asli.
      
      **Contoh Prompt Siap Pakai (Templates)**
      Copy-paste template di bawah ini dan isi bagian dalam kurung `[ ]` sesuai kebutuhanmu:
      
      - Rangkum dokumen panjang ini menjadi: 1 kalimat inti, 3 argumen pendukung, dan 1 kesimpulan final.
      - Identifikasi semua data statistik atau angka penting dari teks ini dan sajikan dalam format list.
      - Berdasarkan teks ini, apa argumen terlemah yang disampaikan oleh penulis? Jelaskan alasannya secara logis.
      
      **🏆 Challenge Praktik**
      Cari artikel Wikipedia panjang, copy-paste ke AI, dan minta dia mengekstrak hanya tanggal dan peristiwa penting ke dalam tabel timeline.
    code: |
      // FORMULA FRAMEWORK UNTUK DIINGAT:
      [Sumber Data] + [Tujuan Ekstraksi] + [Metode Triangulasi] + [Format Output]
      
      // TEMPLATE UTAMA:
      Berdasarkan dokumen laporan yang saya unggah ini, tolong temukan 3 masalah utama perusahaan dan solusi yang diusulkan. Sertakan kutipan kalimat aslinya (exact quote) sebagai bukti. Buatkan dalam format Tabel dengan kolom: Masalah, Solusi, Kutipan Asli.
    challenge: Cari artikel Wikipedia panjang, copy-paste ke AI, dan minta dia mengekstrak hanya tanggal dan peristiwa penting ke dalam tabel timeline.
---
