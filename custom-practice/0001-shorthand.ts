/**
 * LATIHAN REFACTORING: NESTED IF/ELSE -> MODERN SHORTHAND
 * ---------------------------------------------------------
 * Tujuan: 
 * Menyederhanakan blok kondisi (if/else) yang panjang dan bersarang 
 * menjadi kode yang lebih bersih, ringkas, dan type-safe.
 * 
 * Konsep yang dipelajari & diterapkan:
 * - Optional Chaining (?.)    : Mengekstrak data dengan aman tanpa memicu error 'undefined'.
 * - Nullish Coalescing (??)   : Menetapkan nilai default (fallback) secara elegan.
 * - Ternary Operator (? :)    : Menggantikan logika if/else konvensional.
 * - Template Literals (`...`) : Menyisipkan variabel ke dalam string secara dinamis.
 */

interface LatihanProgress {
  username: string;
  leetcode?: {
    kategori?: string;
    statistik?: {
      jumlahSelesai?: number;
      lulusSemuaTest?: boolean;
    };
  };
}

// Cara Konvensional
// function cekStatusLatihan(progress: LatihanProgress): string {
//   let namaKategori;
//   let totalSelesai;
//   let statusLulus;

//   // 1. Cek nama kategori
//   if (progress.leetcode && progress.leetcode.kategori) {
//     namaKategori = progress.leetcode.kategori;
//   } else {
//     namaKategori = "General";
//   }

//   // 2. Cek jumlah soal yang diselesaikan
//   if (progress.leetcode && progress.leetcode.statistik && progress.leetcode.statistik.jumlahSelesai !== null && progress.leetcode.statistik.jumlahSelesai !== undefined) {
//     totalSelesai = progress.leetcode.statistik.jumlahSelesai;
//   } else {
//     totalSelesai = 0;
//   }

//   // 3. Cek apakah lulus semua test case
//   if (progress.leetcode && progress.leetcode.statistik && progress.leetcode.statistik.lulusSemuaTest !== undefined && progress.leetcode.statistik.lulusSemuaTest !== null) {
//     statusLulus = progress.leetcode.statistik.lulusSemuaTest;
//   } else {
//     statusLulus = false;
//   }

//   // 4. Menentukan output
//   if (statusLulus === true) {
//     return "Mantap " + progress.username + "! Kamu lulus kategori " + namaKategori + " dengan " + totalSelesai + " soal.";
//   } else {
//     return "Terus semangat berlatih, " + progress.username + "!";
//   }
// }

// Shorthand
const cekStatusLatihan = (progress: LatihanProgress): string =>  {
    const namaKategori = progress.leetcode?.kategori ?? "General" 
    const totalSelesai = progress.leetcode?.statistik?.jumlahSelesai ?? 0
    const statusLulus = progress.leetcode?.statistik?.lulusSemuaTest ?? false

    return statusLulus ? 
    `Mantap ${progress.username}! Kamu lulus kategori ${namaKategori} dengan ${totalSelesai} soal.`
    : `Terus semangat berlatih, ${progress.username}!`
}