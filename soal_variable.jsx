import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function svar() {
  // ===== Soal 1: Registrasi Akun =====
  const firstname = "Budi";
  const lastname = "Santoso";
  let isAktif = true;
  const outputSoal1 = `Akun atas nama ${firstname} ${lastname} status aktif:${isAktif}`;
  console.log(outputSoal1);

  // ===== Soal 2: Validasi Username =====
  const rawUsername = "   admin_smkn10   ";
  const hilangspasi = rawUsername.trim();
  const hitung = hilangspasi.length;
  const outputSoal2 = `Username bersih:"${hilangspasi}" Panjang karakter:${hitung}`;
  console.log(hilangspasi, hitung);

  // ===== Soal 3: Sensor Komentar Kasar =====
  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
  const cari = komentar.indexOf("buruk");
  const ambil = komentar.substring(0, 19);
  const outputSoal3 = `Posisi kata 'buruk': ${cari} | Potongan kalimat (0-19): "${ambil}"`;
  console.log(cari, ambil);

  // ===== Soal 4: Kode Kupon Diskon =====
  const string1 = "diskon";
  const string2 = "spesial50";
  const gabung = string1.concat(string2);
  const kapital = gabung.toUpperCase();
  const outputSoal4 = `Gabungan: ${gabung} | Kapital: ${kapital}`;
  console.log(gabung, kapital);

  // ===== Soal 5: Konversi Tipe Data Harga =====
  const hargastr = "150000.50";
  const stokstr = "25";
  const konversi = parseFloat(hargastr);
  const stok = parseInt(stokstr, 10);
  const perkalian = konversi * stok;
  const outputSoal5 = `Harga: ${konversi} | Stok: ${stok} | Total: ${perkalian}`;
  console.log(konversi, stok, perkalian);

  // ===== Soal 6: Kalkulator Diskon Belanja =====
  let totalbelanja = 250000;
  totalbelanja -= 50000;
  const pajak = totalbelanja * 0.1;
  totalbelanja += pajak;
  const outputSoal6 = `Total pembayaran akhir: ${totalbelanja}`;
  console.log(totalbelanja);

  // ===== Soal 7: Validasi Usia (Strict vs Longgar) =====
  let inputUsia = "17";
  let syaratUsia = 17;
  const equal = inputUsia === syaratUsia;
  const lebihdari = inputUsia >= syaratUsia;
  const outputSoal7 = `inputUsia === syaratUsia: ${equal} | inputUsia >= syaratUsia: ${lebihdari}`;
  console.log(equal, lebihdari);

  // ===== Soal 8: Login Ganda (AND &&) =====
  const isPasswordCorrect = true;
  const isEmailVerified = false;
  const masukDashboard = isPasswordCorrect && isEmailVerified;
  const outputSoal8 = `Password Benar: ${isPasswordCorrect} | Email Terverifikasi: ${isEmailVerified} | Masuk Dashboard: ${masukDashboard}`;
  console.log(masukDashboard);

  // ===== Soal 9: Beasiswa (OR ||) =====
  const isNilaiTinggi = true;
  const isJuaraLomba = false;
  const layakBeasiswa = isNilaiTinggi || isJuaraLomba;
  const outputSoal9 = `Nilai Tinggi: ${isNilaiTinggi} | Juara Lomba: ${isJuaraLomba} | Layak Beasiswa: ${layakBeasiswa}`;
  console.log(layakBeasiswa);

  // ===== Soal 10: Block Scope (let vs var) =====
  const member = true;
  const totalHargaKeranjang = 200000;
  let totalBayarLet = null;
  let errorAksesLet = "";

  if (member === true) {
    let diskonLet = 0.2;
    totalBayarLet = totalHargaKeranjang - totalHargaKeranjang * diskonLet;
  }

  try {
    // eslint-disable-next-line no-undef
    console.log(diskonLet);
  } catch (error) {
    errorAksesLet = error.message;
  }

  let diskonVar, totalBayarVar;
  if (member === true) {
    diskonVar = 0.2;
    totalBayarVar = totalHargaKeranjang - totalHargaKeranjang * diskonVar;
  }
  console.log("var - Diskon:", diskonVar, "Total Bayar:", totalBayarVar);

  const outputSoal10 = `[let] Total bayar (masih bisa dipakai via variabel luar): ${totalBayarLet} | Error akses langsung: ${errorAksesLet}
[var] Diskon: ${diskonVar} | Total Bayar: ${totalBayarVar} (var bocor keluar blok, let tidak)`;

return (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <View style={styles.card}><Text style={styles.label}>Soal 1</Text><Text style={styles.value}>{outputSoal1}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 2</Text><Text style={styles.value}>{outputSoal2}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 3</Text><Text style={styles.value}>{outputSoal3}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 4</Text><Text style={styles.value}>{outputSoal4}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 5</Text><Text style={styles.value}>{outputSoal5}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 6</Text><Text style={styles.value}>{outputSoal6}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 7</Text><Text style={styles.value}>{outputSoal7}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 8</Text><Text style={styles.value}>{outputSoal8}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 9</Text><Text style={styles.value}>{outputSoal9}</Text></View>
    <View style={styles.card}><Text style={styles.label}>Soal 10</Text><Text style={styles.value}>{outputSoal10}</Text></View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0f172a",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#38bdf8",
  },
  label: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  value: {
    color: "#e2e8f0",
    fontSize: 14,
  },
});