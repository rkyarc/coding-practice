/**
 * LATIHAN 05: METHOD CHAINING (BERANTAI)
 * ---------------------------------------------------------
 * Tujuan: Menggabungkan filter(), map(), dan reduce()
 * Kasus: Menghitung total dana yang diinvestasikan khusus untuk "ASII"
 */

interface Portofolio {
  emiten: string;
  hargaBeli: number;
  lot: number;
}

const dataPortofolio: Portofolio[] = [
  { emiten: "GOTO", hargaBeli: 50, lot: 100 },
  { emiten: "ASII", hargaBeli: 5000, lot: 10 },
  { emiten: "SMGR", hargaBeli: 6000, lot: 5 },
  { emiten: "ASII", hargaBeli: 5200, lot: 20 },
];

const totalDanaASII = dataPortofolio
  .filter(data => data.emiten === "ASII")
  .map(data => data.hargaBeli * data.lot * 100)
  .reduce((acc, curr) => acc + curr, 0)
  
console.log(`Total Dana Investasi ASII: Rp ${totalDanaASII}`);