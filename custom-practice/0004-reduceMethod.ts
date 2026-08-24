/**
 * LATIHAN 04: ARRAY METHODS (REDUCE)
 * ---------------------------------------------------------
 * Tujuan: Mengganti perhitungan for-loop dengan reduce()
 * Kasus: Menghitung harga AVG dari riwayat transaksi GOTO
 */

interface Transaksi {
  hargaBeli: number;
  lot: number;
}

const riwayatGOTO: Transaksi[] = [
  { hargaBeli: 50, lot: 100 },
  { hargaBeli: 52, lot: 50 },
  { hargaBeli: 54, lot: 200 }
];

// CARA LAMA (Menggunakan for-loop)
let totalLotLama = 0;
let totalDanaLama = 0;

for (let i = 0; i < riwayatGOTO.length; i++) {
  totalLotLama = totalLotLama + riwayatGOTO[i].lot;
  totalDanaLama = totalDanaLama + (riwayatGOTO[i].hargaBeli * riwayatGOTO[i].lot); 
}

const avgLama = totalDanaLama / totalLotLama;

// CARA MODERN (Menggunakan reduce)

const totalLotModern = riwayatGOTO.reduce((total, transaksi) => {
    return total + transaksi.lot 
}, 0); 

// Acc = Accumulator(Penampung)
// Curr = Current Value(Data saat ini)
const totalDanaModern = riwayatGOTO.reduce((acc, curr) => acc + (curr.hargaBeli * curr.lot), 0);

const avgModern = totalDanaModern / totalLotModern;

console.log(`Total Lot: ${totalLotModern}`);
console.log(`Harga AVG GOTO: ${avgModern}`);