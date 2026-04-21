---
title: Jenis-Jenis AI
category: AI
order: 62
description: Dari AI paling sederhana hingga yang memiliki kesadaran diri.
content:
  - explanation: >-
      Berdasarkan kemampuannya, AI dibagi menjadi beberapa jenis (tingkatan):
              
      - **Reactive Machines (Mesin Reaktif)**: AI paling dasar yang hanya
      bereaksi terhadap situasi saat ini tanpa menyimpan memori. Contoh: Deep
      Blue (mesin catur IBM).

      - **Limited Memory (Memori Terbatas)**: AI yang bisa menggunakan data masa
      lalu untuk meningkatkan prediksi di masa depan. Contoh: Mobil self-driving
      yang belajar dari data jalanan.

      - **Theory of Mind (Teori Pikiran)**: AI yang mampu memahami emosi, niat,
      dan pemikiran manusia. Status: Masih dalam tahap pengembangan dan
      penelitian.

      - **Self-Awareness (Kesadaran Diri)**: AI yang memiliki kesadaran layaknya
      manusia. Status: Masih berupa konsep teoretis, belum ada di dunia nyata.
    code: |-
      // Jenis-jenis AI dan levelnya:
      let jenisAI = [
          { level: 1, nama: "Reactive Machines", contoh: "Deep Blue (Catur)" },
          { level: 2, nama: "Limited Memory", contoh: "Mobil Tesla Autopilot" },
          { level: 3, nama: "Theory of Mind", contoh: "Masih dikembangkan" },
          { level: 4, nama: "Self-Awareness", contoh: "Belum ada (konsep)" }
      ];

      jenisAI.forEach(function(ai) {
          console.log("Level " + ai.level + ": " + ai.nama);
          console.log("  Contoh: " + ai.contoh);
      });
    challenge: Jenis AI manakah yang sudah bisa menggunakan data masa lalu untuk
      membuat prediksi, seperti pada mobil self-driving?
---
