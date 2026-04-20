export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    category: "Umum",
    question: "Apa itu Pak Koding?",
    answer: "Pak Koding adalah platform belajar mandiri untuk pemula yang ingin terjun ke dunia web development dengan cara yang santai dan praktis."
  },
  {
    category: "Teknis",
    question: "Apakah saya perlu menginstal software tertentu?",
    answer: "Untuk mengikuti kursus ini, kami merekomendasikan menginstal Visual Studio Code sebagai editor teks dan browser modern seperti Google Chrome atau Firefox."
  },
  {
    category: "Kurikulum",
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan kursus ini?",
    answer: "Waktu penyelesaian bervariasi tergantung pada kecepatan belajar masing-masing individu. Namun, rata-rata pengguna dapat menyelesaikan materi dasar dalam 2-4 minggu jika belajar secara konsisten."
  },
  {
    category: "Teknis",
    question: "Apa perbedaan antara HTML, CSS, dan JavaScript?",
    answer: "HTML digunakan untuk struktur konten, CSS untuk tampilan dan desain, sedangkan JavaScript digunakan untuk membuat halaman menjadi interaktif."
  },
  {
    category: "Umum",
    question: "Apakah kursus ini gratis?",
    answer: "Ya, semua materi dasar di Pak Koding dapat diakses secara gratis oleh siapa saja yang ingin belajar."
  },
  {
    category: "Kurikulum",
    question: "Apakah saya akan mendapatkan sertifikat?",
    answer: "Saat ini Pak Koding fokus pada penyediaan materi berkualitas. Kami sedang mempertimbangkan fitur sertifikasi di masa mendatang."
  }
];
