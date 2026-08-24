/**
 * LATIHAN 0002: SPREAD OPERATOR & DESTRUCTURING
 * ---------------------------------------------------------
 * Tujuan: 
 * Menghindari penugasan manual yang berulang saat menggabungkan object
 * dan saat mengekstrak nilai dari dalam object.
 * 
 * Konsep:
 * - Spread Operator (...) : Menggabungkan profil dan plotingDivisi.
 * - Object Destructuring  : Membongkar object untuk mengambil 'nama' dan 'divisi'.
 * - Template Literals     : Merapikan string console.log.
 */

interface Profil {
  nama: string;
  nim: string;
}

interface Ploting {
  divisi: string;
  jabatan: string;
}

// Cara Panjang
// function daftarPanitia(profil: Profil, plotingDivisi: Ploting) {
//   const dataLengkap = {
//     nama: profil.nama,
//     nim: profil.nim,
//     divisi: plotingDivisi.divisi,
//     jabatan: plotingDivisi.jabatan,
//     status: "Aktif"
//   };

//   const namaPanitia = dataLengkap.nama;
//   const divisiPanitia = dataLengkap.divisi;

//   console.log("Berhasil mendaftarkan " + namaPanitia + " ke divisi " + divisiPanitia);

//   return dataLengkap;
// }

// Destructuring & Spread
const daftarPanitia = (profil: Profil, plotingDivisi: Ploting) => {
  const dataLengkap = {...profil, ...plotingDivisi, status: "aktif"}
  const { nama, divisi } = dataLengkap

  console.log(`${nama} adalah anggota divisi ${divisi}`)

  return dataLengkap;
}

// --- DATA TEST ---
const mahasiswa = { nama: "Andi", nim: "123456" };
const penempatan = { divisi: "PSDM", jabatan: "Anggota" };

daftarPanitia(mahasiswa, penempatan);