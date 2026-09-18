import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function skondisi() {
  // ===== Soal 1: Cek Kelulusan Ujian =====
  const nilaiUjian = 65; 
  const statusLulus = nilaiUjian >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
  const warnaLulus = nilaiUjian >= 75 ? "#22c55e" : "#ef4444"; 

  // ===== Soal 2: Peringatan Cuaca Panas =====
  const suhuUdara = 38; 
  // hanya menampilkan elemen di kanannya jika kondisi di kirinya true,
  // jika false, otomatis tidak menampilkan apapun
  const peringatanCuaca = suhuUdara > 35 && "Peringatan: Cuaca Sangat Panas Hari Ini!";

  // ===== Soal 3: Status Login Pengguna =====
  const isLoggedIn = true; 
  const namaUser = "Budi";
  const statusLogin = isLoggedIn ? `Halo, ${namaUser}!` : "Silakan Login Terlebih Dahulu";

  // ===== Soal 4: Diskon Keranjang Belanja =====
  const totalBelanja = 350000;
  const teksDiskon =
    totalBelanja > 500000
      ? "Anda Mendapat Diskon 20%!"
      : totalBelanja >= 200000
      ? "Anda Mendapat Diskon 10%!"
      : "Belanja lebih banyak untuk dapat diskon!";
  const warnaDiskon =
    totalBelanja > 500000 ? "#a855f7" : totalBelanja >= 200000 ? "#3b82f6" : "#9ca3af";

  // ===== Soal 5: Status Keaktifan Toko Berdasarkan Jam =====
  const jamSekarang = 19;
  const statusToko = jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";

  // ===== Soal 6: Mode Tampilan Layar =====
  const isDarkMode = true; 
  const bgSoal6 = isDarkMode ? "#121212" : "#FFFFFF";
  const teksSoal6Color = isDarkMode ? "#FFFFFF" : "#000000";

  // ===== Soal 7: Validasi Password Pendaftaran =====
  const password = "abc12"; 
  const errorPassword = password.length < 6 && "Password terlalu pendek (minimal 6 karakter)";

  // ===== Soal 8: Tarif Parkir Kendaraan Berdasarkan Jenis =====
  const jenisKendaraan = "Motor"; 
  const tarifParkir =
    jenisKendaraan === "Mobil"
      ? "Tarif Parkir: Rp 5.000 / jam"
      : jenisKendaraan === "Motor"
      ? "Tarif Parkir: Rp 2.000 / jam"
      : "Jenis kendaraan tidak dikenali";

  // ===== Soal 9: Ketersediaan Stok Produk =====
  const stokBarang = 5;
  let statusStok = "";
  let warnaStok = "";
  if (stokBarang > 10) {
    statusStok = "Stok Tersedia";
    warnaStok = "#22c55e"; // hijau
  } else if (stokBarang >= 1) {
    statusStok = "Stok Terbatas! Segera Beli";
    warnaStok = "#f97316"; // oranye
  } else {
    statusStok = "Stok Habis";
    warnaStok = "#ef4444"; // merah
  }

  // ===== Soal 10: Rekomendasi Film Berdasarkan Usia =====
  const usiaPenonton = 15; 
  let kategoriFilm = "";
  if (usiaPenonton < 13) {
    kategoriFilm = "Kategori: Semua Umur (SU)";
  } else if (usiaPenonton <= 17) {
    kategoriFilm = "Kategori: Remaja (R)";
  } else {
    kategoriFilm = "Kategori: Dewasa (D)";
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 1 - Nilai Ujian: {nilaiUjian}</Text>
        <Text style={[styles.value, { color: warnaLulus, fontWeight: "700" }]}>{statusLulus}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 2 - Suhu Udara: {suhuUdara}°C</Text>
        {peringatanCuaca ? (
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>{peringatanCuaca}</Text>
          </View>
        ) : (
          <Text style={styles.value}>(Tidak ada peringatan)</Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 3 - Status Login</Text>
        <Text style={styles.value}>{statusLogin}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 4 - Total Belanja: Rp{totalBelanja.toLocaleString("id-ID")}</Text>
        <Text style={[styles.value, { color: warnaDiskon, fontWeight: "700" }]}>{teksDiskon}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 5 - Jam Sekarang: {jamSekarang}.00</Text>
        <Text style={styles.value}>{statusToko}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: bgSoal6, borderLeftColor: "#38bdf8" }]}>
        <Text style={styles.label}>Soal 6 - Dark Mode: {isDarkMode ? "Aktif" : "Nonaktif"}</Text>
        <Text style={{ color: teksSoal6Color, fontSize: 15 }}>
          Latar belakang & teks ini menyesuaikan mode tampilan.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 7 - Password: "{password}" ({password.length} karakter)</Text>
        <Text style={[styles.value, { color: errorPassword ? "#f87171" : "#22c55e", fontWeight: "600" }]}>
          {errorPassword || "Password valid"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 8 - Jenis Kendaraan: {jenisKendaraan}</Text>
        <Text style={styles.value}>{tarifParkir}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 9 - Stok Barang: {stokBarang}</Text>
        <Text style={[styles.value, { color: warnaStok, fontWeight: "700" }]}>{statusStok}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Soal 10 - Usia Penonton: {usiaPenonton} tahun</Text>
        <Text style={styles.value}>{kategoriFilm}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
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
    fontSize: 15,
  },
  warningBox: {
    backgroundColor: "#7f1d1d",
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
  },
  warningText: {
    color: "#fecaca",
    fontWeight: "700",
    fontSize: 14,
  },
});
