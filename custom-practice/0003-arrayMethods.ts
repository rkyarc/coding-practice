/**
 * LATIHAN 03: ARRAY METHODS (MAP & FILTER)
 * ---------------------------------------------------------
 * Tujuan: Mengganti for-loop dengan map() dan filter()
 */

interface Pendaftar {
  nama: string;
  nim: string;
  jenisKelamin: "L" | "P";
}

const dataPendaftar: Pendaftar[] = [
  { nama: "Andi Setiawan", nim: "IF-2301", jenisKelamin: "L" },
  { nama: "Siti Aminah", nim: "IF-2302", jenisKelamin: "P" },
  { nama: "Budi Santoso", nim: "IF-2303", jenisKelamin: "L" },
  { nama: "Dina Lestari", nim: "IF-2304", jenisKelamin: "P" }
];

// 1. FILTERING DATA (Menyaring)

// Cara Lama (Tabel Laki-Laki)
const tabelLakiLama: Pendaftar[] = [];
for (let i = 0; i < dataPendaftar.length; i++) {
  if (dataPendaftar[i].jenisKelamin === "L") {
    tabelLakiLama.push(dataPendaftar[i]);
  }
}

// Cara Modern
const tabelLakiLaki = dataPendaftar.filter(mhs => mhs.jenisKelamin === "L");
const tabelPerempuan = dataPendaftar.filter(mhs => mhs.jenisKelamin === "P")

// 2. MAPPING DATA (Mengubah Bentuk)

// Cara Lama (Mengambil NIM Laki-Laki saja)
const nimLakiLama: string[] = [];
for (let i = 0; i < tabelLakiLaki.length; i++) {
  nimLakiLama.push(tabelLakiLaki[i].nim);
}

// Cara Modern
const nimLakiLaki = tabelLakiLaki.map(mhs => mhs.nim);
const nimPerempuan = tabelPerempuan.map(mhs => mhs.nim)