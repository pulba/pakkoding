import { aiCurriculum } from '../src/data/ai-journey';
import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/materi');

// Ensure directory exists
if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

const detailedContent: Record<string, any> = {
  "ai-mastery-mindset": {
    importance: "Banyak orang gagal menggunakan AI karena menganggapnya seperti mesin pencari (Google). Padahal, AI adalah 'mesin penalaran' yang membutuhkan kolaborasi dan arahan logis.",
    formula: "[Tujuan Utama] + [Tingkat Pemahaman Saya] + [Analogi yang Diinginkan] + [Output Bertahap]",
    components: [
      "Tujuan Utama: Apa yang sebenarnya ingin kamu capai.",
      "Tingkat Pemahaman: Beri tahu AI seberapa banyak yang sudah kamu tahu (misal: 'Saya pemula total').",
      "Analogi: Minta AI menjelaskan menggunakan perumpamaan agar mudah dimengerti.",
      "Output Bertahap: Minta penjelasan selangkah demi selangkah, jangan sekaligus."
    ],
    badPrompt: "Jelaskan tentang quantum computing.",
    goodPrompt: "Saya ingin memahami dasar quantum computing. Tingkat pemahaman saya adalah anak SMA jurusan IPS. Tolong jelaskan konsepnya menggunakan analogi permainan sepak bola. Berikan penjelasannya selangkah demi selangkah.",
    prompts: [
      "Saya sedang belajar [Topik]. Jelaskan konsep [Sub-topik] dengan analogi memasak di dapur.",
      "Saya tidak mengerti bagian [Bagian Sulit]. Bisakah kamu menyederhanakannya lagi seolah-olah saya anak usia 10 tahun?",
      "Uji pemahaman saya tentang [Topik] dengan memberikan 3 pertanyaan pilihan ganda."
    ],
    outputSim: "Output AI tidak lagi memberikan definisi Wikipedia yang membosankan, melainkan cerita atau analogi yang langsung membuat otakmu berkata, 'Oh, begitu maksudnya!'",
    challenge: "Gunakan formula di atas untuk mempelajari satu topik sulit yang selalu membuatmu bingung (misal: Pajak, Coding, atau Fisika)."
  },
  "anatomi-prompt-sempurna": {
    importance: "Prompt yang acak menghasilkan jawaban yang acak (Garbage In, Garbage Out). Menguasai anatomi prompt adalah fondasi utama dari Prompt Engineering.",
    formula: "[Role/Peran] + [Context/Konteks] + [Task/Tugas] + [Format/Bentuk]",
    components: [
      "Role: Siapa AI dalam skenario ini? (Ahli Nutrisi, Programmer Senior, dll).",
      "Context: Background informasi (Saya mahasiswa, budget pas-pasan, butuh cepat).",
      "Task: Tugas spesifik yang harus dikerjakan AI.",
      "Format: Bagaimana output disajikan? (Tabel, poin-poin, kode, esai pendek)."
    ],
    badPrompt: "Kasih ide jualan makanan.",
    goodPrompt: "Bertindaklah sebagai Konsultan Bisnis Kuliner (Role). Saya mahasiswa dengan modal 500 ribu dan waktu luang hanya di malam hari (Context). Buatlah 3 ide jualan makanan ringan (Task). Sajikan dalam bentuk tabel berisi Ide, Perkiraan Modal, dan Strategi Pemasaran (Format).",
    prompts: [
      "Bertindaklah sebagai [Role]. Konteks saya adalah [Konteks]. Buatkan saya [Tugas]. Sajikan dalam bentuk [Format].",
      "Sebagai Guru Bahasa Inggris, saya punya skor TOEFL 400 dan ingin mencapai 500 dalam 1 bulan. Buatkan jadwal belajar harian dalam bentuk tabel.",
      "Kamu adalah Financial Planner. Saya fresh graduate gaji 5 juta. Buatkan rincian alokasi budget bulanan dalam bentuk persentase dan bullet points."
    ],
    outputSim: "AI langsung memberikan tabel yang sangat rapi dan spesifik untuk mahasiswa, lengkap dengan strategi yang masuk akal dengan modal kecil.",
    challenge: "Identifikasi satu masalah terbesarmu minggu ini, lalu tulis ulang menjadi prompt menggunakan struktur Role + Context + Task + Format."
  },
  "prompt-gambar-estetik": {
    importance: "AI Image Generator (Midjourney, DALL-E, Stable Diffusion) tidak mengerti bahasa kiasan. Mereka membutuhkan deskripsi teknis dan literal tentang komposisi visual.",
    formula: "[Subject/Subjek] + [Action/Aksi] + [Environment/Latar] + [Style/Gaya Visual] + [Lighting & Camera/Pencahayaan & Kamera]",
    components: [
      "Subject: Siapa atau apa fokus utama gambarnya? (Misal: Kucing jalanan, robot cyberpunk).",
      "Action: Apa yang sedang dilakukan subjek? (Minum kopi, berlari menerjang hujan).",
      "Environment: Di mana lokasinya? (Di kedai kopi neon Tokyo, di hutan pinus berkabut).",
      "Style: Gaya seninya seperti apa? (Photorealistic, Anime, Oil Painting, 3D Render).",
      "Lighting & Camera: Spesifikasi teknis (Cinematic lighting, 50mm lens, golden hour, drone shot)."
    ],
    badPrompt: "Gambar kucing lucu minum kopi di kota masa depan.",
    goodPrompt: "A street cat drinking espresso from a tiny cup (Subject & Action), sitting on a neon-lit cyber-cafe balcony in neo-Tokyo (Environment), highly detailed photorealistic illustration (Style), cinematic cyberpunk lighting, neon reflections, 85mm lens, depth of field (Lighting & Camera).",
    prompts: [
      "[Subjek utama] sedang [Aksi], berlokasi di [Lingkungan], gaya visual [Style], pencahayaan [Lighting], diambil dengan lensa [Camera].",
      "A futuristic flying car hovering over a dense tropical jungle, highly detailed 3D render Unreal Engine 5, cinematic sunlight, volumetric fog, wide angle lens.",
      "Portrait of an old wise wizard reading a glowing magical book, set in a dark ancient library, classic oil painting style reminiscent of Rembrandt, dramatic chiaroscuro lighting."
    ],
    outputSim: "AI menghasilkan gambar yang memiliki kedalaman (depth), pencahayaan dramatis, dan gaya visual yang konsisten seperti karya seniman profesional.",
    challenge: "Gunakan formula ini di Bing Image Creator / DALL-E untuk membuat poster film fiksi ilmiah karanganmu sendiri!"
  },
  "viral-video-scripting": {
    importance: "Perhatian audiens di media sosial sangat pendek (attention span < 3 detik). Script video yang dibuat asal-asalan akan langsung di-scroll.",
    formula: "[Platform & Audiens] + [Hook/Penarik] + [Retention/Isi] + [CTA/Panggilan Aksi] + [Constraint/Batasan Waktu]",
    components: [
      "Platform & Audiens: Untuk siapa dan di mana? (TikTok untuk anak kuliahan).",
      "Hook: Kalimat 3 detik pertama yang memancing rasa penasaran ekstrim.",
      "Retention: Poin-poin padat yang menyelesaikan masalah (tanpa basa-basi).",
      "CTA: Instruksi jelas di akhir (Save video ini, klik link bio).",
      "Constraint: Batasan teknis (Maksimal 60 detik, tone bahasa gaul)."
    ],
    badPrompt: "Bikinin script tiktok tentang bahaya begadang.",
    goodPrompt: "Buat script TikTok untuk mahasiswa (Platform & Audiens). Gunakan hook yang menakutkan tentang efek begadang pada otak (Hook). Berikan 3 tips cepat mengatasi insomnia (Retention). Akhiri dengan suruh audiens tag teman mereka yang suka begadang (CTA). Durasi total maksimal 45 detik, gunakan bahasa gaul Jakarta (Constraint).",
    prompts: [
      "Tulis naskah Reels Instagram untuk audiens [Target Audiens]. Gunakan hook kontroversial tentang [Topik]. Berikan argumen logis di bagian isi, dan akhiri dengan pertanyaan memancing komen.",
      "Buatkan 5 variasi Hook (kalimat 3 detik pertama) untuk video TikTok edukasi tentang [Topik]. Gunakan pola: Negative hook, Curiosity hook, dan Relatable hook.",
      "Ubah artikel panjang berikut menjadi naskah YouTube Shorts berdurasi 60 detik. Fokus pada 1 fakta paling mencengangkan di awal video."
    ],
    outputSim: "Naskah yang dihasilkan memiliki pacing (tempo) yang cepat, pembukaan yang menghentak, dan struktur yang memaksa audiens menonton sampai habis.",
    challenge: "Buka artikel blog acak, lalu gunakan formula ini untuk menyuruh AI mengubahnya menjadi naskah TikTok siap rekam."
  },
  "tutor-pribadi-feynman": {
    importance: "Membaca teori seringkali tidak membuat kita paham. Feynman Technique adalah metode belajar terbaik dunia (menyederhanakan konsep rumit), dan AI adalah eksekutor sempurnanya.",
    formula: "[Peran Mentor] + [Topik Spesifik] + [Aturan Feynman] + [Instruksi Uji]",
    components: [
      "Peran Mentor: 'Bertindaklah sebagai dosen ahli yang sabar.'",
      "Topik Spesifik: Konsep tepat yang ingin dipahami.",
      "Aturan Feynman: Larang AI menggunakan jargon. Jika pakai istilah sulit, wajib jelaskan dengan analogi.",
      "Instruksi Uji: Minta AI mengeksekusi tes pemahaman di akhir penjelasan."
    ],
    badPrompt: "Apa itu Machine Learning?",
    goodPrompt: "Bertindaklah sebagai mentor teknologi yang sangat pintar tapi ramah. Tolong jelaskan konsep 'Machine Learning' kepada saya. Aturan: Jangan gunakan jargon teknis sama sekali. Jika harus, jelaskan dengan analogi kegiatan sehari-hari di rumah. Setelah menjelaskan, berikan saya 1 pertanyaan studi kasus untuk menguji apakah saya benar-benar paham.",
    prompts: [
      "Jelaskan [Konsep Sulit] menggunakan metode Feynman. Target audiens penjelasan ini adalah anak kelas 1 SMP.",
      "Bantu saya menemukan lubang pengetahuan (knowledge gap) saya tentang [Topik]. Berikan saya 3 pertanyaan menjebak.",
      "Saya akan menjelaskan konsep [Topik] dengan kata-kata saya sendiri di bawah ini. Tolong koreksi jika ada pemahaman saya yang salah: [Penjelasanmu]."
    ],
    outputSim: "AI tidak sekadar melempar tembok teks, melainkan berdialog interaktif, mengoreksi kesalahpahamanmu layaknya guru privat sungguhan.",
    challenge: "Jelaskan kembali satu konsep yang baru AI ajarkan kepadamu di kolom chat, dan minta dia menilai seberapa akurat penjelasanmu."
  },
  "speed-reading-ai": {
    importance: "Membaca dokumen panjang (jurnal, PDF laporan, buku tebal) memakan waktu berhari-hari. AI bisa mengekstrak data spesifik dalam hitungan detik jika prompt-nya tepat.",
    formula: "[Sumber Data] + [Tujuan Ekstraksi] + [Metode Triangulasi] + [Format Output]",
    components: [
      "Sumber Data: Teks atau dokumen yang di-paste/diunggah.",
      "Tujuan Ekstraksi: Informasi pasti yang dicari (Metodologi, hasil, kesimpulan).",
      "Metode Triangulasi: Minta AI menyertakan nomor halaman atau kutipan asli agar tidak halusinasi.",
      "Format Output: Tabel ringkasan, bullet points, atau Q&A."
    ],
    badPrompt: "Tolong rangkum teks ini. [Paste Teks]",
    goodPrompt: "Berdasarkan dokumen laporan yang saya unggah ini, tolong temukan 3 masalah utama perusahaan dan solusi yang diusulkan. Sertakan kutipan kalimat aslinya (exact quote) sebagai bukti. Buatkan dalam format Tabel dengan kolom: Masalah, Solusi, Kutipan Asli.",
    prompts: [
      "Rangkum dokumen panjang ini menjadi: 1 kalimat inti, 3 argumen pendukung, dan 1 kesimpulan final.",
      "Identifikasi semua data statistik atau angka penting dari teks ini dan sajikan dalam format list.",
      "Berdasarkan teks ini, apa argumen terlemah yang disampaikan oleh penulis? Jelaskan alasannya secara logis."
    ],
    outputSim: "AI tidak memberikan ringkasan generik yang mengabaikan detail penting, melainkan tabel presisi lengkap dengan bukti kutipan asli.",
    challenge: "Cari artikel Wikipedia panjang, copy-paste ke AI, dan minta dia mengekstrak hanya tanggal dan peristiwa penting ke dalam tabel timeline."
  }
};

// Generic Prompt Engineering Formula fallback
function getExpertFallback(title: string) {
  const isVideo = title.toLowerCase().includes('video');
  const isImage = title.toLowerCase().includes('gambar') || title.toLowerCase().includes('desain');
  const isWriting = title.toLowerCase().includes('nulis') || title.toLowerCase().includes('copywriting') || title.toLowerCase().includes('artikel');
  
  let formula = "[Role/Peran] + [Task/Tugas] + [Context/Konteks] + [Constraints/Batasan] + [Format/Bentuk]";
  let components = [
    "Role: Identitas spesifik AI (Ahli, Konsultan, Mentor).",
    "Task: Perintah utama yang jelas dan tegas.",
    "Context: Latar belakang masalah atau situasi kamu.",
    "Constraints: Batasan yang tidak boleh dilanggar AI (misal: panjang teks, bahasa).",
    "Format: Struktur output akhir (Tabel, daftar, kode, paragraf)."
  ];

  if (isImage) {
    formula = "[Subject] + [Action/Pose] + [Surroundings] + [Art Style] + [Lighting]";
    components = [
      "Subject: Objek utama dengan detail visual.",
      "Action/Pose: Apa yang terjadi di dalam frame.",
      "Surroundings: Detail latar belakang.",
      "Art Style: Gaya seni (Cyberpunk, Watercolor, Photorealistic).",
      "Lighting: Cahaya dan suasana kamera."
    ];
  }

  return {
    importance: `Kemampuan menggunakan AI untuk **${title}** membedakan antara amatir dan profesional. Menguasai struktur prompt yang benar akan menghemat waktumu hingga 80% sekaligus menghasilkan output berkualitas tinggi.`,
    formula: formula,
    components: components,
    badPrompt: `"Tolong bantu saya dengan ${title}."`,
    goodPrompt: `"Bertindaklah sebagai Ahli Senior di bidang ${title}. Saya sedang mengerjakan project X dan memiliki kendala Y. Tolong selesaikan tugas ini dengan mengutamakan prinsip Z. Jangan gunakan kata-kata klise. Berikan jawaban dalam bentuk tabel perbandingan."`,
    prompts: [
      `"Sebagai ahli [Role], berikan panduan komprehensif tentang ${title} untuk kasus spesifik saya: [Konteks]."`,
      `"Buatkan 3 alternatif solusi untuk masalah ${title} dengan parameter berikut: [Parameter 1], [Parameter 2]."`,
      `"Evaluasi pendekatan saya tentang ${title} berikut ini, dan temukan celah kesalahannya: [Pendekatanmu]."`
    ],
    outputSim: "AI akan berubah dari 'robot penjawab acak' menjadi 'konsultan pribadi' yang memberikan analisis tajam, terstruktur, dan siap pakai.",
    challenge: `Buat satu prompt menggunakan formula di atas yang menargetkan masalah terberatmu hari ini terkait ${title}.`
  };
}

console.log('Generating Expert Practical Prompt Engineering Materi files...');

let globalOrder = 100;

aiCurriculum.forEach((phase) => {
  phase.materials.forEach((material) => {
    const fileName = `${material.slug}.md`;
    const filePath = path.join(CONTENT_DIR, fileName);

    const data = detailedContent[material.slug] || getExpertFallback(material.title);

    const content = `---
title: "${material.title}"
category: Prompting
order: ${globalOrder++}
description: "${material.desc.replace(/"/g, '\\"')}"
content:
  - explanation: |
      **Kenapa Skill Ini Krusial?**
      ${data.importance}
      
      **Formula Prompt Engineering: ${material.title}**
      Untuk menguasai teknik ini, jangan pernah mengetik asal. Gunakan struktur framework berikut:
      
      \`${data.formula}\`
      
      **Bedah Komponen Formula:**
      ${data.components.map((comp: string) => `- **${comp.split(':')[0]}**: ${comp.split(':')[1] || ''}`).join('\n      ')}
      
      **Studi Kasus: Amatir vs Master**
      ❌ **Prompt Jelek (Amatir):**
      _${data.badPrompt}_
      (Output AI akan generik, membosankan, dan tidak bisa langsung dipakai).
      
      ✅ **Prompt Master (Prompt Engineering):**
      _${data.goodPrompt}_
      
      **Simulasi Hasil Output AI:**
      ${data.outputSim}
      
      **Contoh Prompt Siap Pakai (Templates)**
      Copy-paste template di bawah ini dan isi bagian dalam kurung \`[ ]\` sesuai kebutuhanmu:
      
      ${data.prompts.map((p: string) => `- ${p}`).join('\n      ')}
      
      **🏆 Challenge Praktik**
      ${data.challenge}
    code: |
      // FORMULA FRAMEWORK UNTUK DIINGAT:
      ${data.formula}
      
      // TEMPLATE UTAMA:
      ${data.goodPrompt}
    challenge: ${data.challenge}
---
`;

    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${fileName}`);
  });
});

console.log('Done generating Expert Prompt Engineering materi files!');
